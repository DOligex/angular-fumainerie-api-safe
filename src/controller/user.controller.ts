import { UserService } from './../services/user.service';
import { Application } from 'express';
import { commonController } from '../core/common.controller';
import jwt = require('express-jwt');
import { User } from 'src/models/user';

// Le controller vous servira à réceptionner les requêtes associées aux utilisateurs
// @param app l'application express

export const UserController = (app: Application) => {

    const service = new UserService();
    const router = commonController(app, service);

    if (!process.env.WILD_JWT_SECRET) {
        throw new Error('Secret is not defined');
    }
    router.use(jwt({secret: process.env.WILD_JWT_SECRET}));

    router.get('/specificroute', (req, res) => {
        console.log((req as any).user);

        res.send('totot');
    });
    app.use('/user', router);
};
