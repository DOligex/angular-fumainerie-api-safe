import { DbHandler } from './db.handler';
import { Slot } from './../models/slot';

export class SlotRepository {

    private GET_ALL = 'SELECT * FROM slot;';
    private GET_BY_ID = 'SELECT * FROM slot where id = ?';

    private db: DbHandler;

    constructor() {
        this.db =  DbHandler.getInstance();

    }

    async findAll() {

        const result = await this.db.query(this.GET_ALL);
        return result;
    }

    async findById(id: number) {
        const slot = await this.db.query(this.GET_BY_ID + id);
        return slot;
    }

    save(slot: any) {
        // votre code ici
    }
}
