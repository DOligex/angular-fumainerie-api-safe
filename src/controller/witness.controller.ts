import { WitnessService } from '../services/witness.service';
import { Application, Router } from 'express';
import { commonController } from '../core/common.controller';

// Le controller vous servira à réceptionner les requêtes associées aux témoignages
// @param app l'application express

export const WitnessController = (app: Application) => {
    const service = new WitnessService();
    let router = Router();

    router.get('/valided', async (req, res) => {
        try {
            const result = await service.getRequestWitnessValided();
            res.send(result);
        } catch (error) {
            res.status(404).send('status introuvable');
        }
});
    router = commonController(app, service, router);
    app.use('/witness', router);
};
