import { NewsService } from './../services/news.service';
import { Application } from 'express';
import { commonController } from '../core/common.controller';

export const NewsController = (app: Application) => {
    const service = new NewsService();
    const router = commonController(app, service);

    router.get('/specificroute', async (req, res) => {
        res.send('resultat');
    });

    app.use('/news', router);
};
