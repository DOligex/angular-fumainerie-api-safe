
import { Draining } from '../models/draining';
import { DrainingService } from '../services/draining.service';
import express, { Application } from 'express';
import { AbstractController } from '../core/abstract.controller';

// Le controller vous servira à réceptionner les requêtes associées aux utilisateurs
// @param app l'application express

export class DrainingController extends AbstractController<Draining> {
    protected route!: string;
    service = new DrainingService();

    constructor(app: Application) {
        super('draining', app );
    }

    protected setupAdditionalRoute(router: express.Router): void | express.Router {
        // route spécifique à décrire ci-dessous
        router.get('/specificroute', (req, res) => {
            res.send('totot');
        });

        return router;
                }
}
