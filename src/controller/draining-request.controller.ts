import { vidangeurMiddleware } from './../core/vidangeur.middleware';
import { DrainingService } from './../services/draining.service';
import { DrainingRequestService } from './../services/draining_request.service';
import { Application, Router, Request, Response } from 'express';
import { commonController } from '../core/common.controller';
import jwt = require('express-jwt');

// Le controller vous servira à réceptionner les requêtes associées aux demandes de vidanges
// @param app l'application express

export const DrainingRequestController = (app: Application) => {
    const service = new DrainingRequestService();
    const drainingService = new DrainingService();

    let router = Router();

    if (!process.env.WILD_JWT_SECRET) {
        throw new Error('Secret is not defined');
    }
    router.use(jwt({secret: process.env.WILD_JWT_SECRET}));

    router.get('/user/:id', async (req, res) => {
        const userId = parseInt(req.params.id, 10);
        try {
            const result = await service.getRequestDrainingByUserId(userId);
            res.send(result);
        } catch (error) {
            res.status(404).send('L\'id ' + userId + 'n\'a pas été trouvé');
        }
    });

    router.post('/draining', async (req, res) => {
        const drainingRequest = req.body;
        const userId: number = parseInt(req.body[0].user_id, 10);
        try {
            const idDrainingCreated = await drainingService.createDraining(userId);
            for (const request of drainingRequest) {
                delete request.name;
                request.draining_id = idDrainingCreated;
                const result = await service.upload(request);
            }
            res.send({id: idDrainingCreated});
        } catch (error) {
            res.status(404).send('Impossible de créer une demande de vidange');
        }
    });
    router.get('/unchecked', vidangeurMiddleware, async (req, res) => {
        try {
            const result = await service.getAllDrainingRequestUnchecked();
            const arrayA = [];
            const useridArray: number[] = [];
            result.filter((element: { user_id: number; }) => useridArray.push(element.user_id));
            const realUserIdArray = Array.from(new Set(useridArray));
            // tslint:disable-next-line: prefer-for-of
            for (let index = 0; index < realUserIdArray.length; index++) {
                const depart = realUserIdArray[index];
                arrayA.push(result.filter((object: { user_id: number; }) => object.user_id === depart));
            }

            res.send(arrayA);

        } catch (error) {
            res.status(404).send('Impossible de recuperer les demandes');

        }
    });
    router.put('/:id/accepte', vidangeurMiddleware, async (req: Request, res: Response) => {
        const id = parseInt(req.params.id, 10);
        const userId = req.body.user_id;
        const element = req.body;
        const vId = element. vidangeur_id;

        try {
            delete element.vidangeur_id;
            const result = await service.modifyElement(element, id );
            delete element.accepted;

            element.vidangeur_id = vId;
            await drainingService.modifyDraining(element, userId);
            res.send(result);
        } catch (error) {
            res.status(404).send('Error');
        }
    });

    router = commonController(app, service, router);

    app.use('/drainingRequest', router);
};
