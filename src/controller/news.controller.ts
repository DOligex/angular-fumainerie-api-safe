import { NewsService } from './../services/news.service';
import { Application, Router } from 'express';
import { commonController } from '../core/common.controller';

export const NewsController = (app: Application) => {
    const service = new NewsService();
    let router = Router();

    router.get('/specificroute', async (req, res) => {
        res.send('resultat');
    });

    router = commonController(app, service, router);
    app.use('/news', router);
};
