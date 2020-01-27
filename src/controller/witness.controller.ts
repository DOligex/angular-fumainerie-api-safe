import { adminMiddleware } from './../core/admin.middleware';
import { WitnessService } from '../services/witness.service';
import { Application, Router } from 'express';
import { commonController } from '../core/common.controller';
import jwt = require('express-jwt');

// Le controller vous servira à réceptionner les requêtes associées aux témoignages
// @param app l'application express

export const WitnessController = (app: Application) => {
    const service = new WitnessService();
    let router = Router();

    router.get('/validations', async (req, res) => {
        try {
            const result = await service.getValide();
            res.send(result);
        } catch (error) {
            res.status(404).send('source non trouvée');
        }
    });
    if (!process.env.WILD_JWT_SECRET) {
        throw new Error('Secret is not defined');
    }
    router.use(jwt({secret: process.env.WILD_JWT_SECRET}));

    router.use(adminMiddleware);
    router = commonController(app, service, router);


    router.get('/valided', async (req, res) => {
        try {
            const result = await service.getRequestWitnessValided();
            res.send(result);
        } catch (error) {
            res.status(404).send('status introuvable');
        }
});
    router = commonController(app, service, router);
    app.use('/witness', router);
};
