import { NewsLetterService } from './../services/newsLetter';
import { Application, Router } from 'express';
import { commonController } from '../core/common.controller';

// Le controller vous servira à réceptionner les requêtes associées aux témoignages
// @param app l'application express

export const NewsletterController = (app: Application) => {
    const service = new NewsLetterService();
    let router = Router();

    router.get('/specificroute', (req, res) => {
        res.send('totot');
    });

    router = commonController(app, service, router);
    app.use('/newsletter', router);
};
