import { DbHandler } from './../repository/db.handler';

export abstract class AbstractRepository<T> {
    protected db: DbHandler;
    private GET_ALL: string;
    protected GET_BY_ID: string;

    private PUT_BY_ID = 'UPDATE ';
    private DEL_BY_ID = 'DELETE FROM ';
    private POST_BY_ID = 'INSERT INTO ';

    constructor(tablename: string) {
        this.db = DbHandler.getInstance();
        this.GET_ALL = `SELECT * FROM ${tablename} ;`;
        this.GET_BY_ID = `SELECT * FROM ${tablename} WHERE id = ? ;`;
        this.PUT_BY_ID = `UPDATE ${tablename} SET ? WHERE id = ? ;`;
        this.DEL_BY_ID = `DELETE FROM ${tablename} WHERE id = ? ;`;
        this.POST_BY_ID = `INSERT INTO ${tablename} SET ? ;`;
    }

    findAll(): Promise<T[]> {
        return this.db.query(this.GET_ALL) as Promise<T[]>;
    }

    findById(id: number): Promise<T[]> {
        return this.db.query(this.GET_BY_ID, id) as Promise<T[]>;
    }

    modify(element: T, id: number): Promise<T> {
        return this.db.query(this.PUT_BY_ID, [element, id]) as Promise<T>;
    }

    delete(id: number): Promise<T> {
        return this.db.query(this.DEL_BY_ID, id) as Promise<T>;
    }

    save(element: T): Promise<T> {
        return this.db.query(this.POST_BY_ID, element) as Promise<T>;
    }
}
