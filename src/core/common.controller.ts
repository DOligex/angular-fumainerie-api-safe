import { Application, Router, Request, Response } from 'express';
import express from '../loaders/express';
import { AbstractService } from './abstract.service';
import jwt = require('express-jwt');

export const commonController = (app: Application, service: AbstractService<any>) => {

    const abstractRouter: Router = Router();

    if (!process.env.WILD_JWT_SECRET) {
        throw new Error('Secret is not defined');
    }
    abstractRouter.use(jwt({secret: process.env.WILD_JWT_SECRET}));

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
            res.status(404).send('L\'id ' + id + 'n\'a pas été trouvé');
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
