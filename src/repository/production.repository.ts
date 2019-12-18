import { DbHandler } from './db.handler';

export class ProductionRepository {

    private GET_ALL = 'SELECT * FROM production;';
    private GET_BY_ID = 'SELECT * FROM production where id =';

    private db: DbHandler;

    constructor() {
        this.db =  DbHandler.getInstance();

    }

    async findAll() {

        const result = await this.db.query(this.GET_ALL);
        return result;
    }

    async findById(id: number) {
        const production = await this.db.query(this.GET_BY_ID + id);
        return production;
    }

    save(production: any) {
        // votre code ici
    }
}
