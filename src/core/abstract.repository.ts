import { DbHandler } from './../repository/db.handler';

export abstract class AbstractRepository<T> {

    private GET_ALL = 'SELECT * FROM ';
    protected abstract TABLE_NAME: string;
    protected db: DbHandler;

    constructor() {
        this.db = DbHandler.getInstance();

    }

    findAll(): Promise<T[]> {
        return this.db.query(this.GET_ALL + this.TABLE_NAME + ';') as Promise<T[]>;
    }

}
