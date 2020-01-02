import { DbHandler } from './db.handler';
import { Home } from './../models/home';

export class HomeRepository {

    private GET_ALL = 'SELECT * FROM home';
    private GET_BY_ID = 'SELECT * FROM home WHERE id = ?';
    private POST_BY_ID = 'INSERT INTO home SET ?';
    private PUT_BY_ID = 'UPDATE home SET ? WHERE id = ?';
    private DEL_BY_ID = 'DELETE FROM home WHERE id = ?';

    private db: DbHandler;

    constructor() {
        this.db =  DbHandler.getInstance();

    }

    async findAll() {
        const result = await this.db.query(this.GET_ALL);
        return result;
    }

    async findById(id: number) {
        const home = await this.db.query(this.GET_BY_ID , id);
        return home;
    }

    async save(home: Home) {
        const postHome = await this.db.query(this.POST_BY_ID, home);
        return postHome;
    }

    async modify(home: Home, id: number) {
        const modifyHome = await this.db.query(this.PUT_BY_ID, [home, id]);
        return modifyHome;
    }

    async delete(id: number) {
        const deleteHome = await this.db.query(this.DEL_BY_ID , id);
        return deleteHome;
    }
}
