import { DrainingRequest } from './../models/draining-request';
import { Draining } from './../models/draining';
import { AbstractRepository } from '../core/abstract.repository';

export class DrainingRepository extends AbstractRepository<Draining> {

    constructor() {
        super('draining');
    }
    private GET_DRAINING_DONE_BY_DATE = 'SELECT * FROM draining WHERE  user_id = ? AND done_draining = 1 ORDER BY session_date';
    private GET_DRAINING_ACCEPTED_UNDONE = 'SELECT d.*, slot.name, home.address, home.address_plus, home.phone, home.zip, home.city, user.firstname, user.lastname, draining_request.slot_id FROM draining as d INNER JOIN draining_request ON draining_request.draining_id=d.id INNER JOIN slot ON draining_request.slot_id=slot.id INNER JOIN home ON d.user_id=home.user_id INNER JOIN user ON d.user_id=user.id  WHERE draining_request.accepted = 1 AND d.done_draining=0 AND d.vidangeur_id = ? ORDER BY session_date';
    private POST_EMPTY_DRAINING = 'INSERT INTO draining (user_id) VALUES (?)';
    private UPDATE_DRAINING_REQUEST_STATUS = 'UPDATE draining SET status = 1 WHERE user_id = ?';
    private UPDATE_DRAINING_SESSION_DATE = 'UPDATE draining SET ? WHERE user_id = ? AND done_draining =0';
    private GET_NEXT_DRAINING_BY_USER_ID = 'SELECT d.id, dR.id, dR.session_date, dR.slot_id, dR.accepted, d.done_draining, dR.user_id, slot.name FROM draining_request as dR INNER JOIN slot ON slot.id = dR.slot_id INNER JOIN draining as d ON d.id=dR.draining_id AND dR.user_id= ? WHERE dR.accepted=1 AND d.done_draining = 0 ORDER BY session_date';
    private GET_DRAINING_DONE = 'SELECT d.*, slot.name, home.address, home.address_plus, home.phone, home.zip, home.city, user.firstname, user.lastname, draining_request.slot_id FROM draining as d INNER JOIN draining_request ON draining_request.draining_id=d.id INNER JOIN slot ON draining_request.slot_id=slot.id INNER JOIN home ON d.user_id=home.user_id INNER JOIN user ON d.user_id=user.id WHERE d.done_draining=1 AND d.vidangeur_id = ? ORDER BY session_date';

    async getDraining(userId: number) {
        const result = await this.db.query(this.GET_DRAINING_DONE_BY_DATE, userId);
        return result;
    }
    async getNextDraining(userId: number) {
        const result = await this.db.query(this.GET_NEXT_DRAINING_BY_USER_ID, userId);
        return result;
    }
    async createDraining(userId: number): Promise<number> {
        const result = await this.db.query(this.POST_EMPTY_DRAINING, userId);
        return result.insertId;
    }
    async update(userId: number): Promise<number> {
        return this.db.query(this.UPDATE_DRAINING_REQUEST_STATUS, userId);
    }
    async modifyDraining(element: Draining, id: number) {
        return this.db.query(this.UPDATE_DRAINING_SESSION_DATE, [element, id]);
    }
    async getDrainingAccepted(userId: number) {
        return this.db.query(this.GET_DRAINING_ACCEPTED_UNDONE, userId);
    }
    async getDrainingDone(userId: number) {
        return await this.db.query(this.GET_DRAINING_DONE, userId);
    }

}
