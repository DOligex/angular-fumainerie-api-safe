import { Question } from './../models/question';
import { QuestionRepository } from './../repository/question.repository';
import { AbstractService } from '../core/abstract.service';

export class QuestionService extends AbstractService<Question> {

    repository = new QuestionRepository();

}
