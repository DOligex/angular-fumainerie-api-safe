import { DrainingRequest } from './../models/draining-request';
import { DrainingService } from './../services/draining.service';
import { DrainingRequestService } from './../services/draining_request.service';
import { Application, Router } from 'express';
import { commonController } from '../core/common.controller';
import { Draining } from '../models/draining';

// Le controller vous servira à réceptionner les requêtes associées aux demandes de vidanges
// @param app l'application express

export const DrainingRequestController = (app: Application) => {
    const service = new DrainingRequestService();
    const drainingService = new DrainingService();

    let router = Router();

    router.get('/user/:id', async (req, res) => {
        const userId = parseInt(req.params.id, 10);
        try {
            const result = await service.getRequestDrainingByUserId(userId);
            res.send(result);
        } catch (error) {
            res.status(404).send('L\'id ' + userId + 'n\'a pas été trouvé');
        }
    });

    router.post('/draining', async (req, res) => {
        const draining = req.body;
        const userId: number = parseInt(req.body.user_id, 10);

        try {
            const idDrainingCreated = await drainingService.createDraining(userId);
            draining.draining_id = idDrainingCreated;
            const result = await service.upload(draining);
            res.send(result);
        } catch (error) {
            res.status(404).send('Impossible de creer une demande de vidange');
        }
    });

    router = commonController(app, service, router);

    app.use('/drainingRequest', router);
};
