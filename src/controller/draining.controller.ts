import { DrainingService } from '../services/draining.service';
import { Application } from 'express';
import { commonController } from '../core/common.controller';

// Le controller vous servira à réceptionner les requetes associées aux vidanges
// @param app l'application express

export const DrainingController = (app: Application) => {
    const service = new DrainingService();
    const router = commonController(app, service);

    router.get('/specificroute', (req, res) => {
        res.send('totot');
    });

    app.use('/draining', router);
};
