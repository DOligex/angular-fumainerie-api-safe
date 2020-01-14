import { Home } from './../models/home';
import { AbstractRepository } from '../core/abstract.repository';

export class HomeRepository extends AbstractRepository<Home> {

    private POST_BY_USER_ID = 'INSERT INTO home SET ? ';

    constructor() {
        super('home');

    }

    async saveHomeDetails(home: Home) {
        const formSaved = await this.db.query(this.POST_BY_USER_ID, home);
        return formSaved;
    }
}
