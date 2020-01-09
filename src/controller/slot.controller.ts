import { SlotService } from '../services/slot.service';
import { Application } from 'express';
import { commonController } from '../core/common.controller';

// Le controller vous servira à réceptionner les requêtes associées aux créneaux d'interventions proposés
// @param app l'application express

export const SlotController = (app: Application) => {
    const service = new SlotService();
    const router = commonController(app, service);

    router.get('/specificroute', (req, res) => {
        res.send('totot');
    });

    app.use('/slot', router);
};
