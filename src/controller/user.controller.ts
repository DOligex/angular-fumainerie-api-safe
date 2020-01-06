import { User } from '../models/user';
import { UserService } from './../services/user.service';
import express, { Application } from 'express';
import { AbstractController } from '../core/abstract.controller';

export class UserController extends AbstractController<User> {
    protected route!: string;
    service = new UserService();

    constructor(app: Application) {
        super('user', app );
    }

    protected setupAdditionalRoute(router: express.Router): void | express.Router {

        router.get('/specificroute', (req, res) => {
            res.send('totot');
        });

        return router;
                }
}
