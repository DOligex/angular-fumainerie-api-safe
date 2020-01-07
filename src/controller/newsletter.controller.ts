import { NewsLetterService } from './../services/newsLetter';
import { Application } from 'express';
import { commonController } from '../core/common.controller';

// Le controller vous servira à réceptionner les requêtes associées aux témoignages
// @param app l'application express

export const NewsletterController = (app: Application) => {
    const service = new NewsLetterService();
    const router = commonController(app, service);

    router.get('/specificroute', (req, res) => {
        res.send('totot');
    });

    app.use('/newsletter', router);
};
