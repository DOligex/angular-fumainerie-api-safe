import { connected } from './../core/connected-middleware';
import { adminMiddleware } from './../core/admin.middleware';
import { Application, Router } from 'express';
import { commonController } from '../core/common.controller';
import { EventService } from './../services/event.service';
import jwt = require('express-jwt');

// Le controller vous servira à réceptionner les requêtes associées aux évenements
// @param app l'application express

export const EventController = (app: Application) => {
    const service = new EventService();
    let router = Router();

    router.use(connected());

    router.get('/date', async (req, res) => {
        try {
                const result = await service.getByDate();
                res.send(result);
            } catch (error) {
                res.status(404).send('Les évenements n\'ont pas été trouvés');
            }
    });

    router = commonController(app, service, router);

    app.use('/event', router);
};
