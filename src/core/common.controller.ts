import { Application, Router, Request, Response } from 'express';
import { AbstractService } from './abstract.service';
import jwt = require('express-jwt');

export const commonController = (app: Application, service: AbstractService<any>, abstractRouter = Router()) => {

    if (!process.env.WILD_JWT_SECRET) {
        throw new Error('Secret is not defined');
    }
    // to enable the bottom line for the auth process work 🤨
    // abstractRouter.use(jwt({secret: process.env.WILD_JWT_SECRET}));

    abstractRouter.get('/', async (req: Request, res: Response) => {
        const result = await service.getAll();
        res.send(result);
    });

    abstractRouter.get('/:id', async (req: Request, res: Response) => {
        const id = parseInt(req.params.id, 10);

        try {
            const result = await service.getById(id);
            res.send(result);
        } catch (error) {
            res.status(404).send('coucou');
        }
    });

    abstractRouter.put('/:id', (req: Request, res: Response) => {
        const id = parseInt(req.params.id, 10);
        const element = req.body;
        service.modifyElement(element, id );
        res.send(element);
    });

    abstractRouter.delete('/:id', (req: Request, res: Response) => {
        const id = parseInt(req.params.id, 10);
        service.deleteElement(id);
        res.send();
    });

    abstractRouter.post('/', (req: Request, res: Response) => {
        const element = req.body;
        service.upload(element);
        res.send(element);
    });

    return abstractRouter;
};
