import { Application, Router } from 'express';
import { commonController } from '../core/common.controller';
import { EventService } from './../services/event.service';

// Le controller vous servira à réceptionner les requêtes associées aux évenements
// @param app l'application express

export const EventController = (app: Application) => {
    const service = new EventService();
    let router = Router();

    router.get('/date', async (req, res) => {
        try {
            const result = await service.getByDate();
            res.send(result);
        } catch (error) {
            res.status(404).send('Les évenements n\'ont pas été trouvé');
        }
    });

    router = commonController(app, service, router);

    app.use('/event', router);
};
