import { AuthService } from '../services/auth.service';
import express, { Router, Request, Response, Application } from 'express';

/**
 * Le controller vous servira à réceptionner les requêtes associées aux utilisateurs
 *
 * @param app l'application express
 */
export const AuthController = (app: Application) => {

    const authRouter: Router = express.Router();
    const authService = new AuthService();

    authRouter.post('/signup', async (req: Request, res: Response) => {
        const user = req.body;
        try {
            await authService.signUp(user);
            res.send(user);

        } catch (error) {
            res.status(409).send('Email déjà existant');

        }
    });

    app.use('/auth', authRouter);
};
