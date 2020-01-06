import { Document } from './../models/document';
import { DocumentService } from './../services/document.service';
import express, { Application } from 'express';
import { AbstractController } from '../core/abstract.controller';
import { commonController } from '../core/common.controller';

// Le controller vous servira à réceptionner les requêtes associées aux utilisateurs
// @param app l'application express

export const DocumentController = (app: Application) => {
    const service = new DocumentService();

    const router = commonController(app, service);

    router.get('/specificroute', (req, res) => {
        res.send('totot');
    });

    app.use('/document', router);
};
