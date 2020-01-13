import { HomeService } from '../services/home.service';
import { Application } from 'express';
import { commonController } from '../core/common.controller';

// Le controller vous servira à réceptionner les requêtes associées au foyer
// @param app l'application express

export const HomeController = (app: Application) => {
    const service = new HomeService();
    const router = commonController(app, service);

    router.post('/form', async (req, res) => {
        const home = req.body;
        try {
            // await service.saveHomeForm(home, id);
        } catch (error) {
            res.status(409).send('');
        }
        res.send('totot');
    });

    app.use('/home', router);
};
