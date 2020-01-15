import { DrainingRequest } from './../models/draining-request';
import { Draining } from './../models/draining';
import { AbstractRepository } from '../core/abstract.repository';

export class DrainingRepository extends AbstractRepository<Draining> {

    constructor() {
        super('draining');
    }
    private GET_DRAINING_DONE_BY_DATE = 'SELECT * FROM draining WHERE user_id = ? AND done_draining = 1 ORDER BY check_date';
    private POST_EMPTY_DRAINING = 'INSERT INTO draining (user_id) VALUES (?)';
    private GET_NEXT_DRAINING_BY_DATE = 'SELECT * FROM draining INNER JOIN draining_request ON draining.id=draining_request.draining_id= ? WHERE status=1 AND done_draining = 0 ORDER BY check_date, session_date';

    async getDraining(userId: number) {
        const result = await this.db.query(this.GET_DRAINING_DONE_BY_DATE, userId);
        return result;
    }

    async createDraining(userId: number): Promise<number> {
        const result = await this.db.query(this.POST_EMPTY_DRAINING, userId);
        return result.insertId;
    }

    async getNextDraining(userId: number) {
        const result = await this.db.query(this.GET_NEXT_DRAINING_BY_DATE, userId);
        return result;
    }
}
