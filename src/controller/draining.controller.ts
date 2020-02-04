import { vidangeurMiddleware } from './../core/vidangeur.middleware';
import { DrainingService } from '../services/draining.service';
import { Application, Router } from 'express';
import { commonController } from '../core/common.controller';
import jwt = require('express-jwt');

// Le controller vous servira à réceptionner les requetes associées aux vidanges
// @param app l'application express

export const DrainingController = (app: Application) => {
    const service = new DrainingService();
    let router = Router();

    if (!process.env.WILD_JWT_SECRET) {
        throw new Error('Secret is not defined');
    }
    router.use(jwt({secret: process.env.WILD_JWT_SECRET}));
// Get draining done by for the vidangeur by the vidangeur
    router.get('/user/:id', async (req, res) => {
        const userId = parseInt(req.params.id, 10);
        try {
            const result = await service.getDrainingByUserId(userId);
            res.send(result);
        } catch (error) {
            res.status(404).send('L\'id ' + userId + 'n\'a pas été trouvé');
        }
    });
// Get next draining for the producteur
    router.get('/user/:id/next', async (req, res) => {
        const userId = parseInt(req.params.id, 10);
        try {
            const result = await service.getNextDrainingByUserId(userId);
            res.send(result);
        } catch (error) {
            res.status(404).send('L\'id ' + userId + 'n\'a pas été trouvé');
        }
    });
// Get draining accepted undone by the vidangeur for the vidangeur
    router.get('/accepted/:id', async (req, res) => {
        const userId = parseInt(req.params.id, 10);
        try {
            const result = await service.getDrainingAccepted(userId);
            res.send(result);
        } catch (error) {
            res.status(404).send('Pas de demande trouvé');
        }
    });

// Get draining accepted done by the vidangeur for the vidangeur
    router.get('/done/:id', async (req, res) => {
        const userId = parseInt(req.params.id, 10);
        try {
            const result = await service.getDrainingDone(userId);
            res.send(result);
        } catch (error) {
            res.status(404).send('Pas de demande trouvé');
        }
    });

    router.put('/status', vidangeurMiddleware, async (req, res) => {
        const userId = req.body.id;
        try {
            const result = await service.update(userId);
            res.send(result);
        } catch (error) {
            res.status(404).send('L\'id ' + userId + 'n\'a pas été trouvé');
        }
    });
    router = commonController(app, service, router);
    app.use('/draining', router);
};
