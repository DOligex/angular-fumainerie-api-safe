import { DrainingRequest } from './../models/draining-request';
import { AbstractRepository } from '../core/abstract.repository';

export class DrainingRequestRepository extends AbstractRepository<DrainingRequest> {

    constructor() {
        super('draining_request');
    }

    private GET_DRAINING_REQUEST_BY_USER_ID = 'SELECT * FROM draining_request WHERE';

    async getByUserId() {
        const result = await this.db.query(this.GET_DRAINING_REQUEST_BY_USER_ID);
        return result;
    }
}
