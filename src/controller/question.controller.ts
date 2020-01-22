import { QuestionService } from '../services/question.service';
import { Application, Router } from 'express';
import { commonController } from '../core/common.controller';
import jwt = require('express-jwt');

// Le controller vous servira à réceptionner les requêtes associées aux questions posées à la fumainerie
// @param app l'application express

export const QuestionController = (app: Application) => {
    const service = new QuestionService();
    let router = Router();
    if (!process.env.WILD_JWT_SECRET) {
        throw new Error('Secret is not defined');
    }
    router.use(jwt({secret: process.env.WILD_JWT_SECRET}));

    router.get('/specificroute', (req, res) => {
        res.send('totot');
    });

    router = commonController(app, service, router);
    app.use('/question', router);
};
