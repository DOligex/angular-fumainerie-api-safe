import { Event } from './../models/event';
import { AbstractRepository } from '../core/abstract.repository';

export class EventRepository extends AbstractRepository<Event> {

    constructor() {
        super('event');
    }

    // Recherche des événements avec barre de recherche
    // private GET_EVENT_BY_SEARCH = 'SELECT * FROM event WHERE author LIKE ? OR description LIKE ?' ;

    // async searchEvent(word: string) {
    //     const searchWord = '%' + word + '%';
    //     const result = await this.db.query(this.GET_EVENT_BY_SEARCH, [searchWord, searchWord]);
    //     return result;
    // }

}
