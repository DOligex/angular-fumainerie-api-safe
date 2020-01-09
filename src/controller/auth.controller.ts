
import { commonController } from './../core/common.controller';
import { AuthService } from '../services/auth.service';
import express, { Router, Request, Response, Application } from 'express';
import { User } from 'src/models/user';

/**
 * Le controller vous servira à réceptionner les requêtes associées aux utilisateurs
 *
 * @param app l'application express
 */
export const AuthController = (app: Application) => {

    const authService = new AuthService();
    const authRouter: Router = express.Router();

    authRouter.post('/signup', async (req: Request, res: Response) => {
        const user = req.body;
        try {
            await authService.signUp(user);
            // Changer user car il renvoi le mot de passe
            res.send('Record Ok');

        } catch (error) {
            res.status(409).send('Email déjà existant');
        }
    });
    authRouter.post('/signin', async (req: Request, res: Response) => {
        const user: User = req.body ;
        try {
            await authService.signIn(user.email, user.password);
            res.send(user);

        } catch (error) {
            res.status(409).send('Connexion impossible');

        }
    });

    app.use('/auth', authRouter);
};
