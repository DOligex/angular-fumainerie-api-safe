import { NewsService } from '../services/news.service';
import { Application } from 'express';
import { commonController } from '../core/common.controller';

// Le controller vous servira à réceptionner les requêtes associées aux actualités
// @param app l'application express

export const NewsController = (app: Application) => {
    const service = new NewsService();
    const router = commonController(app, service);

    router.get('/specificroute', (req, res) => {
        res.send('totot');
    });

    app.use('/news', router);
};
