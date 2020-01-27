import { News } from './../models/news';
import { AbstractRepository } from '../core/abstract.repository';

export class NewsRepository extends AbstractRepository<News> {

    constructor() {
        super('news');

    }

    private GET_VALIDED = 'SELECT * FROM news JOIN user ON user_id = user.id WHERE status=1;';

    async getValidated(status: number) {
        const result = await this.db.query(this.GET_VALIDED, [this.GET_VALIDED]);
        return result;
    }
}
