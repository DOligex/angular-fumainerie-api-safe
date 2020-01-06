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
        router.get('/user/:id', async (req, res) => {
            const userId = parseInt(req.params.id, 10);
            try {
                const result = await this.service.getRequestDrainingByUserId(userId);
                res.send(result);
            } catch (error) {
                res.status(404).send('L\'id ' + userId + 'n\'a pas été trouvé');
            }

        });

        return router;
    }
}
