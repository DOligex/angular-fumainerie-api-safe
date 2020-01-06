import { HomeService } from '../services/home.service';
import { Application } from 'express';
import { commonController } from 'src/core/common.controller';

export const HomeController = (app: Application) => {
    const service = new HomeService();
    const router = commonController(app, service);

    router.get('/specificroute', (req, res) => {
        res.send('totot');
    });

    app.use('/home', router);
};
