import { DrainingService } from '../services/draining.service';
import { Application, Router } from 'express';
import { commonController } from '../core/common.controller';

// Le controller vous servira à réceptionner les requetes associées aux vidanges
// @param app l'application express

export const DrainingController = (app: Application) => {
    const service = new DrainingService();
    let router = Router();

    router.get('/user/:id', async (req, res) => {
        const userId = parseInt(req.params.id, 10);
        try {
            const result = await service.getDrainingByUserId(userId);
            res.send(result);
        } catch (error) {
            res.status(404).send('L\'id ' + userId + 'n\'a pas été trouvé');
        }
    });
    router.get('/accepted/:id', async (req, res) => {
        const userId = parseInt(req.params.id, 10);
        try {
            const result = await service.getDrainingAccepted(userId);
            res.send(result);
        } catch (error) {
            res.status(404).send('Pas de demande trouvé');
        }
    });

    router.put('/status', async (req, res) => {
        const userId = req.body.id;
        try {

            const result = await service.update(userId);
            res.send(result);
        } catch (error) {
            res.status(404).send('L\'id ' + userId + 'n\'a pas été trouvé');
        }
    });

    router = commonController(app, service, router);

    app.use('/draining', router);
};
