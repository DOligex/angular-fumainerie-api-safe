import { SlotService } from '../services/slot.service';
import { Application, Router } from 'express';
import { commonController } from '../core/common.controller';
import jwt = require('express-jwt');

// Le controller vous servira à réceptionner les requêtes associées aux créneaux d'interventions proposés
// @param app l'application express

export const SlotController = (app: Application) => {
    const service = new SlotService();
    let router = Router();

    if (!process.env.WILD_JWT_SECRET) {
        throw new Error('Secret is not defined');
    }
    router.use(jwt({secret: process.env.WILD_JWT_SECRET}));

    router.get('/specifique', async (req, res) => {
        res.send('resultat');
    });

    router = commonController(app, service, router);
    app.use('/slot', router);
};
