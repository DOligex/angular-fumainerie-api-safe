import { Witness } from '../models/witness';
import { WitnessService } from '../services/witness.service';
import express, { Application } from 'express';
import { AbstractController } from '../core/abstract.controller';

export class WitnessController extends AbstractController<Witness> {
    protected route!: string;
    service = new WitnessService();

    constructor(app: Application) {
        super('witness', app );
    }

    protected setupAdditionalRoute(router: express.Router): void | express.Router {

        router.get('/specificroute', (req, res) => {
            res.send('totot');
        });

        return router;
                }
}

// /**
//  * Le controller vous servira à réceptionner les requêtes associées aux utilisateurs
//  *
//  * @param app l'application express
//  */
// export const WitnessController = (app: Application) => {

//     const witnessRouter: Router = express.Router();
//     const witnessService = new WitnessService();

//     witnessRouter.post('/', (req: Request, res: Response) => {
//         const witness = req.body;
//         witnessService.upload(witness);
//         res.send(witness);
//     });

//     witnessRouter.put('/:id', (req: Request, res: Response) => {
//         const id = parseInt(req.params.id, 10);
//         const witness = req.body;
//         witnessService.modifyWitness(witness, id);
//         res.send(witness);
//     });

//     witnessRouter.delete('/:id', (req: Request, res: Response) => {
//         const id = parseInt(req.params.id, 10);
//         witnessService.deleteWitness(id);
//         res.send();
//     });

//     witnessRouter.get('/', async (req: Request, res: Response) => {
//         const result = await witnessService.getValided();
//         res.send(result);
//     });

//     witnessRouter.get('/:id', async (req: Request, res: Response) => {
//         const id = parseInt(req.params.id, 10);

//         try {
//             const result = await witnessService.getById(id);
//             res.send(result);
//         } catch (error) {
//             res.status(404).send('L\'id n\'a pas été trouvé' + id);
//         }
//     });

//     witnessRouter.get('/validations', async (req: Request, res: Response) => {
//         const result = await witnessService.getAll();
//         res.send(result);
//     });

//     app.use('/witness', witnessRouter);
// };
