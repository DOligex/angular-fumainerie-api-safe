
import { Event } from './../models/event';
import { EventRepository } from '../repository/event.repository';
import { AbstractService } from '../core/abstract.service';

export class EventService extends AbstractService<Event> {

    repository = new EventRepository();

    // recherche évenement par mot clé
    // async getBySearch(word: string) {
    //     const search = await this.repository.searchEvent(word);
    //     return search;
    // }
}
