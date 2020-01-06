import { News } from '../models/news';
import { NewsService } from '../services/news.service';
import express, { Application } from 'express';
import { AbstractController } from '../core/abstract.controller';

export class NewsController extends AbstractController<News> {
    protected route!: string;
    service = new NewsService();

    constructor(app: Application) {
        super('news', app);
    }
    protected setupAdditionalRoute(router: express.Router): void | express.Router {

        router.get('/specificroute', (req, res) => {
            res.send('totot');
        });

        return router;
                }

}
