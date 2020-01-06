import { Event } from './../models/event';
import { EventRepository } from '../repository/event.repository';
import { AbstractService } from '../core/abstract.service';

export class EventService extends AbstractService<Event> {

    repository = new EventRepository();

    // recherche évenement par mot clé
    async getByDate() {
        const search = await this.repository.getEventByDate();
        return search;
    }
}
