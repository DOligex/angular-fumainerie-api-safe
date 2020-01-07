import { Event } from './../models/event';
import { AbstractRepository } from '../core/abstract.repository';

export class EventRepository extends AbstractRepository<Event> {

    constructor() {
        super('event');
    }

    // Recherche des événements dont la date est suppérieureau à aujourd'hui
    private GET_EVENT_BY_DATE_SUP_NOW = 'SELECT * FROM event WHERE date > CURDATE() ORDER BY date' ;

    async getEventByDate() {
        const result = await this.db.query(this.GET_EVENT_BY_DATE_SUP_NOW);
        return result;
    }

}
