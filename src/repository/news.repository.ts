import { News } from '../models/news';
import { AbstractRepository } from '../core/abstract.repository';

export class NewsRepository extends AbstractRepository<News> {

    constructor() {
        super('news');

    }
}
