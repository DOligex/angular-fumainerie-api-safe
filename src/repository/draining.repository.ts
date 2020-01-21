import { DrainingRequest } from './../models/draining-request';
import { Draining } from './../models/draining';
import { AbstractRepository } from '../core/abstract.repository';

export class DrainingRepository extends AbstractRepository<Draining> {

    constructor() {
        super('draining');
    }
    private GET_DRAINING_DONE_BY_DATE = 'SELECT * FROM draining WHERE  user_id = ? AND done_draining = 1 ORDER BY check_date';
    private POST_EMPTY_DRAINING = 'INSERT INTO draining (user_id) VALUES (?)';
    private UPDATE_DRAINING_REQUEST_STATUS = 'UPDATE draining SET status = 1 WHERE user_id = ?';
    private GET_DRAINING_UPDATED = 'SELECT * FROM draining WHERE id = ?';

    async getDraining(userId: number) {
        const result = await this.db.query(this.GET_DRAINING_DONE_BY_DATE, userId);
        return result;
    }

    async createDraining(userId: number): Promise<number> {
        const result = await this.db.query(this.POST_EMPTY_DRAINING, userId);
        return result.insertId;
    }
    async update(userId: number): Promise<number> {
        return this.db.query(this.UPDATE_DRAINING_REQUEST_STATUS, userId);
    }

}
