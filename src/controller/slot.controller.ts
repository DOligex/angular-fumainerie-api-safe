import { SlotService } from '../services/slot.service';
import { Application, Router } from 'express';
import { commonController } from '../core/common.controller';

// Le controller vous servira à réceptionner les requêtes associées aux créneaux d'interventions proposés
// @param app l'application express

export const SlotController = (app: Application) => {
    const service = new SlotService();
    let router = Router();

    router.get('/all', async (req, res) => {
       const slots =  await service.getAll();
       res.send(slots);
    });
    // Il manque le passage du routeur au commonController(service, router) 🤨
    router = commonController(app, service);

    app.use('/slot', router);
};
