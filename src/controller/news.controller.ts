import { NewsService } from './../services/news.service';
import { Application, Router } from 'express';
import { commonController } from '../core/common.controller';

export const NewsController = (app: Application) => {
    const service = new NewsService();
    let router = Router();

    router.get('/validations', async (req, res) => {
        try {
            const result = await service.getValide();
            res.send(result);
        } catch (error) {
            res.status(404).send('source non trouvée');

        }
        res.send('resultat');
    });

    router = commonController(app, service, router);
    app.use('/news', router);
};
