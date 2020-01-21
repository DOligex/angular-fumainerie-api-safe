import { vidangeurMiddleware } from './../core/vidangeur.middleware';
import { HomeService } from '../services/home.service';
import { Application } from 'express';
import { commonController } from '../core/common.controller';

// Le controller vous servira à réceptionner les requêtes associées au foyer
// @param app l'application express

export const HomeController = (app: Application) => {
    const service = new HomeService();
    const router = commonController(app, service);

        // Duplication de code 🤨 l13 => l30
    router.post('/form', async (req, res) => {
        const home = req.body;
        console.log(req.body);
        try {
            await service.saveHomeForm(home);
        } catch (error) {
            res.status(409).send('La requête n\'a pas abouti');
        }
    });

    router.post('/draining-requested', vidangeurMiddleware, async (req, res) => {
        // route pour poster une vidange
        const home = req.body;
        try {
            await service.saveHomeForm(home);
        } catch (error) {
            res.status(409).send('La requête n\'a pas abouti');
        }
    });

    app.use('/home', router);
};
