import { Slot } from '../models/slot';
import { SlotService } from '../services/slot.service';
import express, {  Application } from 'express';
import { AbstractController } from '../core/abstract.controller';

export class SlotController extends AbstractController<Slot> {
    protected route!: string;
    service = new SlotService();

    constructor(app: Application) {
        super('slot', app);
    }

    protected setupAdditionalRoute(router: express.Router): void | express.Router {

        router.get('/specificroute', (req, res) => {
            res.send('totot');
        });

        return router;
                }

}
