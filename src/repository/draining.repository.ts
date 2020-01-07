import { Draining } from './../models/draining';
import { AbstractRepository } from '../core/abstract.repository';

export class DrainingRepository extends AbstractRepository<Draining> {

    constructor() {
        super('draining');
    }

    private GET_DRAINING_BY_DATE = 'SELECT * FROM draining WHERE user_id = ? AND valid_account = 1 ORDER BY check_date';

    async getDraining(userId: number) {
        const result = await this.db.query(this.GET_DRAINING_BY_DATE, userId);
        return result;
    }

}
