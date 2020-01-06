import { Draining } from './../models/draining';
import { AbstractRepository } from '../core/abstract.repository';

export class DrainingRepository extends AbstractRepository<Draining> {

    constructor() {
        super('draining');
    }

    private GET_DRAINING_BY_DATE = 'SELECT * FROM draining WHERE site_arrival_time LIKE ? OR check_date LIKE ?';

    async searchDraining(word: string) {
        const searchWord = '%' + word + '%';
        const result = await this.db.query(this.GET_DRAINING_BY_DATE, [searchWord, searchWord]);
        return result;
    }

}
