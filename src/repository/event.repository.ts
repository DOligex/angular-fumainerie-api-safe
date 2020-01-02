import { Event } from './../models/event';
import { DbHandler } from './db.handler';

export class EventRepository {

    private GET_ALL = 'SELECT * FROM event JOIN user ON user.id= user_id;';
    private GET_BY_ID = 'SELECT * FROM event JOIN user ON user.id= user_id where id = ?';
    private POST_BY_ID = 'INSERT INTO event JOIN user ON user.id= user_id SET ?';
    private PUT_BY_ID = 'UPDATE event JOIN user ON user.id= user_id SET ? WHERE id = ?';
    private DEL_BY_ID = 'DELETE FROM event JOIN user ON user.id= user_id WHERE id = ?';

    private db: DbHandler;

    constructor() {
        this.db =  DbHandler.getInstance();
    }
    async findAll() {
        const result = await this.db.query(this.GET_ALL);
        return result;
    }
    async findById(id: number) {
        const event = await this.db.query(this.GET_BY_ID , id);
        return event;
    }
    async save(event: Event) {
        // votre code ici
        const postEvent = await this.db.query(this.POST_BY_ID, event);
        return postEvent;
    }
    async modifyEvent(event: Event, id: number) {
        const modifyEvent = await this.db.query(this.PUT_BY_ID, [event, id]);
        return modifyEvent;
    }
    async deleteEvent(id: number) {
        const deleteEvent = await this.db.query(this.DEL_BY_ID , id);
        return deleteEvent;
    }
}
