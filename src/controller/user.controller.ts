import { UserService } from './../services/user.service';
import { Application } from 'express';
import { commonController } from '../core/common.controller';

// Le controller vous servira à réceptionner les requêtes associées aux utilisateurs
// @param app l'application express

export const UserController = (app: Application) => {

    
    const service = new UserService();
    const router = commonController(app, service);
    
    router.get('/specificroute', (req, res) => {
        res.send('totot');
    });
    
    // router.use(jwt({secret: process.env.WILD_JWT_SECRET}));
    app.use('/user', router);
};
