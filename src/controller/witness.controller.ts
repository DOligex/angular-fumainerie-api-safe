import { Witness } from '../models/witness';
import { WitnessService } from '../services/witness.service';
import express, { Application } from 'express';
import { AbstractController } from '../core/abstract.controller';

export class WitnessController extends AbstractController<Witness> {
    protected route!: string;
    service = new WitnessService();

    constructor(app: Application) {
        super('witness', app );
    }

    protected setupAdditionalRoute(router: express.Router): void | express.Router {

        router.get('/specificroute', (req, res) => {
            res.send('totot');
        });

        return router;
                }
}
