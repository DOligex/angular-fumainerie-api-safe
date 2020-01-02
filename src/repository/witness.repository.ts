import { Witness } from './../models/witness';
import { AbstractRepository } from '../core/abstract.repository';

export class WitnessRepository extends AbstractRepository<Witness> {

    constructor() {
        super('document');
    }

    private GET_VALIDED = 'SELECT * FROM witness JOIN user ON user_id = user.id WHERE status=1;';

    async getValidated(status: number) {
        const searchStatus = status ;
        const result = await this.db.query(this.GET_VALIDED, [searchStatus, searchStatus]);
        return result;
    }
}
