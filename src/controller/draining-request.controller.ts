import { DrainingRequestService } from './../services/draining_request.service';
import { DrainingRequest } from '../models/draining-request';
import express, { Application } from 'express';
import { AbstractController } from '../core/abstract.controller';

// Le controller vous servira à réceptionner les requêtes associées aux utilisateurs
// @param app l'application express

export class DrainingRequestController extends AbstractController<DrainingRequest> {
    protected route!: string;
    service = new DrainingRequestService();

    constructor(app: Application) {
        super('drainingRequest', app );
    }

    protected setupAdditionalRoute(router: express.Router): void | express.Router {
        // route spécifique à décrire ci-dessous
        router.get('/drainingRequestByUserId', (req, res) => {
            // DrainingRequestService.getRequestDrainingByUserId();
            res.send('ok');
        });

        return router;
    }
}
