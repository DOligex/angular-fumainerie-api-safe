import { Event } from '../models/event';
import { EventService } from './../services/event.service';
import express, { Application } from 'express';
import { AbstractController } from '../core/abstract.controller';

export class EventController extends AbstractController<Event> {
    protected route!: string;
    service = new EventService();

    constructor(app: Application) {
        super('event', app);
    }
    // déclaration d'une requete spécifique :
    protected setupAdditionalRoute(router: express.Router): void | express.Router {

        router.get('/specificroute', (req, res) => {
            res.send('totot');
        });

        return router;
                }
}
