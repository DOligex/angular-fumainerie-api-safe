import { Document } from './../models/document';
import { DocumentService } from './../services/document.service';
import express, { Application } from 'express';
import { AbstractController } from '../core/abstract.controller';

// Le controller vous servira à réceptionner les requêtes associées aux utilisateurs
// @param app l'application express

export class DocumentController extends AbstractController<Document> {
    protected route: string;
    service = new DocumentService();

    constructor(app: Application) {
        super('documents', app );
    }

    protected setupAdditionalRoute(router: express.Router): void | express.Router {

        router.get('/specificroute', (req, res) => {
            res.send('totot');
        });

        return router;
                }
}
