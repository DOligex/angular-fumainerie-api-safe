import { Question } from './../models/question';
import { DbHandler } from './db.handler';

export class QuestionRepository {

    private GET_ALL = 'SELECT * FROM question join user on user_id = user.id ';
    private GET_BY_ID = 'SELECT * FROM question join user on user_id = user.id WHERE id = ?;';
    private POST_BY_ID = 'INSERT INTO question SET ?;';
    private PUT_BY_ID = 'UPDATE question SET ? WHERE id = ?;';
    private DEL_BY_ID = 'DELETE FROM question WHERE id = ?;';

    private db: DbHandler;

    constructor() {
        this.db =  DbHandler.getInstance();
    }

    async findAll() {
        const result = await this.db.query(this.GET_ALL);
        return result;
    }

    async findById(id: number) {
        const question = await this.db.query(this.GET_BY_ID , id);
        return question;
    }

    async save(question: Question) {
        const postQuestion = await this.db.query(this.POST_BY_ID, question);
        return postQuestion;
    }

    async modifyQuestion(question: Question, id: number) {
        const modifyQuestion = await this.db.query(this.PUT_BY_ID, [question, id]);
        return modifyQuestion;
    }

    async deleteQuestion(id: number) {
        const deleteQuestion = await this.db.query(this.DEL_BY_ID , id);
        return deleteQuestion;
    }
}
