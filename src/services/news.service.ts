import { News } from '../models/news';
import { NewsRepository } from '../repository/news.repository';
import { AbstractService } from '../core/abstract.service';

export class NewsService extends AbstractService<News> {

        repository = new NewsRepository();
}
