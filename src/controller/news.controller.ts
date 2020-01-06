import { NewsService } from '../services/news.service';
import { Application } from 'express';
import { commonController } from 'src/core/common.controller';

export const NewsController = (app: Application) => {
    const service = new NewsService();
    const router = commonController(app, service);

    router.get('/specificroute', (req, res) => {
        res.send('totot');
    });

    app.use('/news', router);
};
