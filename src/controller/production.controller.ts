
import { Production } from '../models/production';
import { ProductionService } from '../services/production.service';
import { AbstractController } from '../core/abstract.controller';
import express, { Application } from 'express';

export class ProductionController extends AbstractController<Production> {
    protected route!: string;
    service = new ProductionService();

    constructor(app: Application) {
        super('production', app );
    }

    protected setupAdditionalRoute(router: express.Router): void | express.Router {

        router.get('/specificroute', (req, res) => {
            res.send('totot');
        });

        return router;
                }
}
