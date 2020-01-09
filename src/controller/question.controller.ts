import { QuestionService } from '../services/question.service';
import { Application } from 'express';
import { commonController } from '../core/common.controller';

// Le controller vous servira à réceptionner les requêtes associées aux questions posées à la fumainerie
// @param app l'application express

export const QuestionController = (app: Application) => {
    const service = new QuestionService();
    const router = commonController(app, service);

    router.get('/specificroute', (req, res) => {
        res.send('totot');
    });

    app.use('/question', router);
};
