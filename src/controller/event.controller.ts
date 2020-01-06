import { Application } from 'express';
import { commonController } from '../core/common.controller';
import { EventService } from './../services/event.service';

// Le controller vous servira à réceptionner les requêtes associées aux évenements
// @param app l'application express

export const EventController = (app: Application) => {
    const service = new EventService();
    const router = commonController(app, service);

    router.get('/specificroute', (req, res) => {
        res.send('totot');
    });

    app.use('/event', router);
};
