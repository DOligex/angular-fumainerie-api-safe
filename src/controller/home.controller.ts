import { UserService } from './../services/user.service';
import { vidangeurMiddleware } from './../core/vidangeur.middleware';
import { HomeService } from '../services/home.service';
import { Application } from 'express';
import { commonController } from '../core/common.controller';
import { Home } from 'src/models/home';
import jwt = require('express-jwt');
import { decode } from 'jsonwebtoken';

// Le controller vous servira à réceptionner les requêtes associées au foyer
// @param app l'application express

export const HomeController = (app: Application) => {
    const service = new HomeService();
    const userService = new UserService();
    const router = commonController(app, service);

    router.post('/update', async (req, res) => {
        const objectRequest = req.body;
        // console.log(req.body);

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

    app.use('/home', router);
};
