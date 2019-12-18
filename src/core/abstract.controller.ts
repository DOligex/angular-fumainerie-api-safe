import express, { Router, Request, Response, Application } from 'express';
import { AbstractService } from './abstract.service';

export abstract class AbstractController<T> {

    protected abstract service: AbstractService<T>;

    constructor(path: string, app: Application) {

        // Chargement des routes génériques
        let routeur = this.init();

        // Récupération des routes additionels
        const finalRouter = this.setupAdditionalRoute(routeur);

        // Si route présente elle deviennent les références
        if (finalRouter && finalRouter.get !== null) {
            routeur = finalRouter;
        }

        // Assigniation des routes au path
        app.use('/' + path, routeur);
    }

    init(): Router {
        const abstractRouter: Router = express.Router();

        abstractRouter.get('/', async (req: Request, res: Response) => {
            const result = await this.service.getAll();
            res.send(result);
        });

        return abstractRouter;
    }

        /**
     * Cette methode est définis chez la route fille
     * Elle sert a enrichir la configuration du routeur
     * on peut ajouter des routes au routeurs
     * @param router la routeur a enrichir
     */
    protected abstract setupAdditionalRoute(router: Router): Router | void;

}

// const secret = process.env.WILD_JWT_SECRET;
// if (!secret) {
//         throw new Error; ('Pas de secret setup');
//     }
