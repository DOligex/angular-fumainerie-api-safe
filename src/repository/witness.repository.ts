import { Witness } from './../models/witness';
import { AbstractRepository } from '../core/abstract.repository';

export class WitnessRepository extends AbstractRepository<Witness> {

    constructor() {
        super('witness');
    }

    private GET_VALIDED = 'SELECT * FROM witness JOIN user ON user_id = user.id WHERE status = 1;';


    async getValidated(status: number) {
        // this.db.query(this.GET_VALIDED, [this.GET_VALIDED]) 🤨
        // Le deuxième paramètre de la fonction est la valeur du "?" heureusmeent il n'y en a pas 🤨
        const result = await this.db.query(this.GET_VALIDED);
        return result;
    }
}
