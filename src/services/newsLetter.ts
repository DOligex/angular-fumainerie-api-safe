import { NewsletterRepository } from './../repository/newsletter.repository';
import { Newsletter } from '../models/newsletter';
import { AbstractService } from '../core/abstract.service';

export class NewsLetterService extends AbstractService<Newsletter> {

        repository = new NewsletterRepository();

}
