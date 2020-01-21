import { Home } from './../models/home';
import { AbstractRepository } from '../core/abstract.repository';

export class HomeRepository extends AbstractRepository<Home> {

    private POST_BY_USER_ID = 'INSERT INTO home SET ? ';

    constructor() {
        super('home');

    }
    // POST_BY_USER_ID => nom erroné 🤨
    // Logique déjà présente dans le abstract 🤨
    async saveHomeDetails(home: Home) {
        const formSaved = await this.db.query(this.POST_BY_USER_ID, home);
        return formSaved;
    }
}
