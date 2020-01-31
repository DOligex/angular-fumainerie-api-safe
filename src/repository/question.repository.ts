import { Question } from './../models/question';
import { AbstractRepository } from '../core/abstract.repository';

export class QuestionRepository extends AbstractRepository<Question> {

    constructor() {
        super('question');
    }
}
