import { NewsService } from '../services/news.service';
import { Application, Router } from 'express';
import { commonController } from '../core/common.controller';

// Le controller vous servira à réceptionner les requêtes associées aux actualités
// @param app l'application express

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
    });

    router = commonController(app, service, router);

    app.use('/news', router);
};
