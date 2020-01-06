import { Occupant } from '../models/occupant';
import { OccupantService } from '../services/occupant.service';
import express, { Application } from 'express';
import { AbstractController } from '../core/abstract.controller';

// Le controller vous servira à réceptionner les requêtes associées aux utilisateurs
// @param app l'application express

export class OccupantController extends AbstractController<Occupant> {
    protected route!: string;
    service = new OccupantService();

    constructor(app: Application) {
        super('occupant', app );
    }

    protected setupAdditionalRoute(router: express.Router): void | express.Router {

        router.get('/specificroute', (req, res) => {
            res.send('totot');
        });

        return router;
                }
}
