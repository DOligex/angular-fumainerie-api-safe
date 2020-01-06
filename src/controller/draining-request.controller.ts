import { DrainingRequestService } from './../services/draining_request.service';
import { Application } from 'express';
import { commonController } from 'src/core/common.controller';

// Le controller vous servira à réceptionner les requêtes associées aux demandes de vidanges
// @param app l'application express

export const DrainingRequestController = (app: Application) => {
    const service = new DrainingRequestService();

    const router = commonController(app, service);

    router.get('/specificroute', (req, res) => {
        res.send('totot');
    });

    app.use('/drainingRequest', router);
};
