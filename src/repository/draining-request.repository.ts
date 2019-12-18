import { DbHandler } from './db.handler';

export class DrainingRequestRepository {

    private GET_ALL = 'SELECT * FROM draining_request;';
    private GET_BY_ID = 'SELECT * FROM draining_request where id = ?';

    private db: DbHandler;

    constructor() {
        this.db =  DbHandler.getInstance();

    }

    async findAll() {
        const result = await this.db.query(this.GET_ALL);
        return result;
    }

    async findById(id: number) {
        const drainingRequest = await this.db.query(this.GET_BY_ID + id);
        return drainingRequest;
    }

    save(drainingRequest: any) {
        // votre code ici
    }
}
