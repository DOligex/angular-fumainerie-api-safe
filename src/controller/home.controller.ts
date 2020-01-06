import { Home } from './../models/home';
import { HomeService } from '../services/home.service';
import express, { Application } from 'express';
import { AbstractController } from '../core/abstract.controller';

export class HomeController extends AbstractController<Home> {
    protected route!: string;
    service = new HomeService();

    constructor(app: Application) {
        super('home', app);
    }
    protected setupAdditionalRoute(router: express.Router): void | express.Router {

        router.get('/specificroute', (req, res) => {
            res.send('totot');
        });

        return router;
                }

}
