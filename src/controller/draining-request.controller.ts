import { DrainingRequestService } from './../services/draining_request.service';
import { Application } from 'express';
import { commonController } from '../core/common.controller';

// Le controller vous servira à réceptionner les requêtes associées aux demandes de vidanges
// @param app l'application express

export const DrainingRequestController = (app: Application) => {
    const service = new DrainingRequestService();
    const router = commonController(app, service);

    router.get('/user/:id', async (req, res) => {
            const userId = parseInt(req.params.id, 10);
            try {
                const result = await service.getRequestDrainingByUserId(userId);
                res.send(result);
            } catch (error) {
                res.status(404).send('L\'id ' + userId + 'n\'a pas été trouvé');
            }
    });

    app.use('/drainingRequest', router);
};
