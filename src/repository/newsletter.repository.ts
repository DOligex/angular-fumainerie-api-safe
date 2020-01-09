import { Newsletter } from '../models/newsletter';
import { AbstractRepository } from '../core/abstract.repository';

export class NewsletterRepository extends AbstractRepository<Newsletter> {

    constructor() {
        super('newsletter');
    }
}
