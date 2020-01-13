import { Home } from './../models/home';
import { AbstractRepository } from '../core/abstract.repository';

export class HomeRepository extends AbstractRepository<Home> {

    private POST_BY_USER_ID = 'INSERT INTO home SET ? WHERE user_id = ?';

    constructor() {
        super('home');

    }

    async saveHomeDetails(home: Home, id: number) {
        const formSaved = await this.db.query(this.POST_BY_USER_ID, [home, id]);
        return formSaved;
    }
}
