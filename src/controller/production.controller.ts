import { ProductionService } from '../services/production.service';
import { Application } from 'express';
import { commonController } from 'src/core/common.controller';

// Le controller vous servira à réceptionner les requêtes associées aux productions d'un foyer
// @param app l'application express

export const ProductionController = (app: Application) => {
    const service = new ProductionService();
    const router = commonController(app, service);

    router.get('/specificroute', (req, res) => {
        res.send('totot');
    });

    app.use('/production', router);
};
