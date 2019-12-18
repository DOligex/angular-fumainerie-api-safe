import { Document } from './../models/document';
import { DocumentService } from './../services/document.service';
import express, { Router, Request, Response, Application } from 'express';
import { AbstractController } from '../core/abstract.controller';

/**
* Le controller vous servira à réceptionner les requêtes associées aux utilisateurs
*
* @param app l'application express
*/
// export const DocumentController = (app: Application) => {

//     const documentRouter: Router = express.Router();
//     const documentService = new DocumentService();

//     documentRouter.post('/', (req: Request, res: Response) => {
//         const document = req.body;
//         documentService.upload(document);
//         res.send(document);
//     });

//     documentRouter.put('/:id', (req: Request, res: Response) => {
//         const id = parseInt(req.params.id, 10);
//         const document = req.body;
//         documentService.modifyDoc(document, id);
//         res.send(document);
//     });

//     documentRouter.delete('/:id', (req: Request, res: Response) => {
//         const id = parseInt(req.params.id, 10);
//         documentService.deleteDoc(id);
//         res.send();
//     });

//     documentRouter.get('/', async (req: Request, res: Response) => {
//         const result = await documentService.getAll();
//         res.send(result);
//     });

//     documentRouter.get('/:id', async (req: Request, res: Response) => {
//         const id = parseInt(req.params.id, 10);

//         try {
//             const result = await documentService.getById(id);
//             res.send(result);
//         } catch (error) {
//             res.status(404).send('L\'id n\'a pas été trouvé' + id);
//         }
//     });
// // Recherche de documents avec barre de recherche
//     documentRouter.get('/recherche/:recherche', async (req: Request, res: Response) => {
//         const word = req.params.recherche;
//         const result = await documentService.getBySearch(word);
//         res.send(result);
//     });

//     app.use('/documents', documentRouter);
// };

export class DocumentController extends AbstractController<Document> {
    service = new DocumentService();

    constructor(app: Application) {
        super('documents', app );
    }

    protected setupAdditionalRoute(router: express.Router): void | express.Router {

        router.get('/specificroute', (req, res) => {
            res.send('totot');
        });

        return router;
                }
}
