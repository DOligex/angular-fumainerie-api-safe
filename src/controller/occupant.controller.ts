import { OccupantService } from '../services/occupant.service';
import { Application } from 'express';
import { commonController } from 'src/core/common.controller';

// Le controller vous servira à réceptionner les requêtes associées aux occupants d'un foyer
// @param app l'application express

export const OccupantController = (app: Application) => {
    const service = new OccupantService();
    const router = commonController(app, service);

    router.get('/specificroute', (req, res) => {
        res.send('totot');
    });

    app.use('/occupant', router);
};
