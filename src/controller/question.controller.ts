import { QuestionService } from './../services/question.service';
import express, { Router, Request, Response, Application } from 'express';

/**
 * Le controller vous servira à réceptionner les requêtes associées aux utilisateurs
 *
 * @param app l'application express
 */
export const QuestionController = (app: Application) => {

    const questionRouter: Router = express.Router();
    const questionService = new QuestionService();

    questionRouter.post('/', (req: Request, res: Response) => {
        const question = req.body;
        questionService.upload(question);
        res.send(question);
    });

    questionRouter.put('/:id', (req: Request, res: Response) => {
        const id = parseInt(req.params.id, 10);
        const question = req.body;
        questionService.modifyQuestion(question, id);
        res.send(question);
    });

    questionRouter.delete('/:id', (req: Request, res: Response) => {
        const id = parseInt(req.params.id, 10);
        questionService.deleteQuestion(id);
        res.send();
    });

    questionRouter.get('/', async (req: Request, res: Response) => {
        const result = await questionService.getAll();
        res.send(result);
    });

    questionRouter.get('/:id', async (req: Request, res: Response) => {
        const id = parseInt(req.params.id, 10);

        try {
            const result = await questionService.getById(id);
            res.send(result);
        } catch (error) {
            res.status(404).send('L\'id n\'a pas été trouvé' + id);
        }
    });

    app.use('/questions', questionRouter);
};
