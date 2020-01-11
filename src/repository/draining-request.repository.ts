import { User } from './../models/user';
import { DrainingRequest } from './../models/draining-request';
import { AbstractRepository } from '../core/abstract.repository';

export class DrainingRequestRepository extends AbstractRepository<DrainingRequest> {

    constructor() {
        super('draining_request');
    }

    private GET_DRAINING_REQUEST_BY_USER_ID = 'SELECT * FROM draining_request INNER JOIN slot ON draining_request.slot_id = slot.id WHERE user_id = ? AND status = 0 ';
    private GET_ALL_DRAININGREQUEST = 'SELECT d.*, home.*, slot.* FROM draining_request as d INNER JOIN home ON (home.user_id=d.user_id) INNER JOIN slot ON ( slot.id=d.slot_id) WHERE d.status = 0';

    async getByUserId(userId: number) {
        const result = await this.db.query(this.GET_DRAINING_REQUEST_BY_USER_ID, userId);
        return result;
    }
    async getByAllUser() {
        const result = await this.db.query(this.GET_ALL_DRAININGREQUEST);
        return result;
    }
}
