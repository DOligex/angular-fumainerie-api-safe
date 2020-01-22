import { vidangeurMiddleware } from './../core/vidangeur.middleware';
import { HomeService } from '../services/home.service';
import { Application, Router } from 'express';
import { commonController } from '../core/common.controller';
import jwt = require('express-jwt');

// Le controller vous servira à réceptionner les requêtes associées au foyer
// @param app l'application express

export const HomeController = (app: Application) => {
    const service = new HomeService();
    let router = Router();

    if (!process.env.WILD_JWT_SECRET) {
        throw new Error('Secret is not defined');
    }
    router.use(jwt({secret: process.env.WILD_JWT_SECRET}));

    router.post('/update', async (req, res) => {
        const objectRequest = req.body;

        try {
            await service.saveHomeForm(objectRequest[0], objectRequest[1]);
        } catch (error) {
            res.status(409).send('La requête n\'a pas abouti');
        }
    });

    router.post('/draining-requested', vidangeurMiddleware, async (req, res) => {
        // route pour poster une vidange
        const {home, id} = req.body;
        try {
            await service.saveDrainingRequest(home, id);
        } catch (error) {
            res.status(409).send('La requête n\'a pas abouti');
        }
    });

    router = commonController(app, service, router);
    app.use('/home', router);
};
