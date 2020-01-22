import { DocumentService } from './../services/document.service';
import { Application, Router } from 'express';
import { commonController } from '../core/common.controller';
import { adminMiddleware } from '../core/admin.middleware';
import jwt = require('express-jwt');

// Le controller vous servira à réceptionner les requêtes associées aux documents
// @param app l'application express

export const DocumentController = (app: Application) => {

    if (!process.env.WILD_JWT_SECRET) {
        throw new Error('Secret is not defined');
    }
    const service = new DocumentService();
    let router = Router();

    router.get('/accueil', (req, res) => {
        try {
            res.send('test sans middleware');
        } catch (error) {
            res.status(402).send('pas de récupération');
        }
    });
    router.use(adminMiddleware); // appel du middleware vérifiant le role du user
    router.use(jwt({secret: process.env.WILD_JWT_SECRET}));
    router = commonController(app, service);
    app.use('/document', router);
};
