import { User } from './../models/user';
import { DrainingRequest } from './../models/draining-request';
import { AbstractRepository } from '../core/abstract.repository';

export class DrainingRequestRepository extends AbstractRepository<DrainingRequest> {

    constructor() {
        super('draining_request');
    }

    private GET_DRAINING_REQUEST_BY_USER_ID = 'SELECT dR.*, slot.name FROM draining_request as dR INNER JOIN draining ON dR.draining_id=draining.id INNER JOIN slot ON dR.slot_id = slot.id WHERE dR.user_id = ? AND draining.status = 0 ';
    private GET_ALL_DRAINING_REQUEST = 'SELECT dR.*, slot.name, home.address, home.address_plus, home.phone, home.zip, home.city, user.firstname, user.lastname, draining.status FROM draining_request as dR INNER JOIN slot ON dR.slot_id=slot.id INNER JOIN home ON dR.user_id=home.user_id INNER JOIN user ON dR.user_id=user.id INNER JOIN draining ON dR.draining_id=draining.id WHERE draining.status = 0 AND dR.accepted=0';

    async getByUserId(userId: number) {
        const result = await this.db.query(this.GET_DRAINING_REQUEST_BY_USER_ID, userId);
        return result;
    }
    async getAllDrainingRequestUnchecked() {
        const result = await this.db.query(this.GET_ALL_DRAINING_REQUEST);
        return result;
    }

}
