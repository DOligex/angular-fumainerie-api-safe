import { Question } from './../models/question';
import { DbHandler } from './db.handler';
import { AbstractRepository } from '../core/abstract.repository';

export class QuestionRepository extends AbstractRepository<Question> {

    constructor() {
        super('question');
    }
    private GET_ASK_BY_SEARCH = 'SELECT * FROM question WHERE topic LIKE ? OR question LIKE ? ' ;
    private GET_ASK_BY_TRAITED = 'SELECT * FROM question WHERE traited === oui OR traited === non ' ;

    // Recherche des documents avec barre de recherche
    async searchQuestion(word: string) {
        const searchWord = '%' + word + '%';
        const result = await this.db.query(this.GET_ASK_BY_SEARCH, [searchWord, searchWord]);
        return result;
    }
    async searchQuestionStatus(word: string) {
        const searchWord = '%' + word + '%';
        const result = await this.db.query(this.GET_ASK_BY_TRAITED, [searchWord, searchWord]);
        return result;
    }
}
