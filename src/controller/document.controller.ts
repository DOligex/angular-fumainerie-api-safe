import { DocumentService } from './../services/document.service';
import { Application } from 'express';
import { commonController } from '../core/common.controller';
import { adminMiddleware } from '../core/admin.middleware';

// Le controller vous servira à réceptionner les requêtes associées aux documents
// @param app l'application express

export const DocumentController = (app: Application) => {
    const service = new DocumentService();
    const router = commonController(app, service);

    router.use(adminMiddleware); // appel du middleware vérifiant le role du user

    router.get('/specificroute', (req, res) => {
        res.send('totot');
    });

    app.use('/document', router);
};
