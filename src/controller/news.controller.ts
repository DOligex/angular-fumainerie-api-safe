import { adminMiddleware } from './../core/admin.middleware';
import { NewsService } from './../services/news.service';
import { Application, Router } from 'express';
import { commonController } from '../core/common.controller';

export const NewsController = (app: Application) => {
    const service = new NewsService();
    let router = Router();

    router.get('/valided', async (req, res, next) => {
        try {
          const result = await service.getAll();
          res.send(result);
        } catch (error) {
          res.status(404).send('Récupération impossible');
        }
      });

    router.use(adminMiddleware);
    router = commonController(app, service, router);
    app.use('/news', router);
};
