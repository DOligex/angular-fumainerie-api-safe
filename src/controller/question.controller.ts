
import { Question } from '../models/question';
import { QuestionService } from '../services/question.service';
import express, { Application } from 'express';
import { AbstractController } from '../core/abstract.controller';

export class QuestionController extends AbstractController<Question> {
    protected route!: string;
    service = new QuestionService();

    constructor(app: Application) {
        super('question', app );
    }

    protected setupAdditionalRoute(router: express.Router): void | express.Router {

        router.get('/specificroute', (req, res) => {
            res.send('totot');
        });

        return router;
                }
}
