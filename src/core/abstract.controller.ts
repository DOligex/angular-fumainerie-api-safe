// import express, { Router, Request, Response, Application } from 'express';
// import { AbstractService } from './abstract.service';
// import jwt from 'express-jwt';

// export abstract class AbstractController<T> {
//     // protected abstract route: string;
//     protected abstract service: AbstractService<T>;

//     constructor(path: string, app: Application) {
//         const abstractRouter: Router = express.Router();
//         if (!process.env.WILD_JWT_SECRET) {
//             throw new Error('Secret is not defined');
//         }
//         abstractRouter.use(jwt({secret: process.env.WILD_JWT_SECRET}));
//         // Chargement des routes génériques
//         let routeur = this.init();

//         // Récupération des routes additionels
//         const finalRouter = this.setupAdditionalRoute(routeur);

//         // Si route présente elle deviennent les références
//         if (finalRouter && finalRouter.get !== null) {
//             routeur = finalRouter;
//         }

//         // Assignation des routes au path
//         app.use('/' + path, routeur);
//     }

//     init(): Router {
//         const abstractRouter: Router = express.Router();

//         abstractRouter.get('/', async (req: Request, res: Response) => {
//             const result = await this.service.getAll();
//             res.send(result);
//         });

//         abstractRouter.get('/:id', async (req: Request, res: Response) => {
//             const id = parseInt(req.params.id, 10);

//             try {
//                 const result = await this.service.getById(id);
//                 res.send(result);
//             } catch (error) {
//                 res.status(404).send('L\'id ' + id + 'n\'a pas été trouvé');
//             }
//         });

//         abstractRouter.put('/:id', (req: Request, res: Response) => {
//             const id = parseInt(req.params.id, 10);
//             const element = req.body;
//             this.service.modifyElement(element, id );
//             res.send(element);
//         });

//         abstractRouter.delete('/:id', (req: Request, res: Response) => {
//             const id = parseInt(req.params.id, 10);
//             this.service.deleteElement(id);
//             res.send();
//         });

//         abstractRouter.post('/', (req: Request, res: Response) => {
//             const element = req.body;
//             this.service.upload(element);
//             res.send(element);
//         });
//         return abstractRouter;
//     }

//     // Cette methode est définie chez la route fille
//     //  Elle sert a enrichir la configuration du routeur
//     // on peut ajouter des routes au routeurs
//     // @param router la routeur a enrichir

//     protected abstract setupAdditionalRoute(router: Router): Router | void;

// }
