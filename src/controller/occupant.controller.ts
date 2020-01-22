import { OccupantService } from '../services/occupant.service';
import { Application, Router } from 'express';
import { commonController } from '../core/common.controller';

// Le controller vous servira à réceptionner les requêtes associées aux occupants d'un foyer
// @param app l'application express

export const OccupantController = (app: Application) => {
    const service = new OccupantService();
    let router = Router();

    router.get('/specificroute', (req, res) => {
        res.send('totot');
    });

    router = commonController(app, service, router);
    app.use('/occupant', router);
};
