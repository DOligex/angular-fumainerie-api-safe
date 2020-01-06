import { WitnessService } from '../services/witness.service';
import { Application } from 'express';
import { commonController } from 'src/core/common.controller';

// Le controller vous servira à réceptionner les requêtes associées aux témoignages
// @param app l'application express

export const WitnessController = (app: Application) => {
    const service = new WitnessService();
    const router = commonController(app, service);

    router.get('/specificroute', (req, res) => {
        res.send('totot');
    });

    app.use('/witness', router);
};
