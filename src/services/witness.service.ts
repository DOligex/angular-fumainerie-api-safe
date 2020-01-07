import { Witness } from './../models/witness';
import { WitnessRepository } from './../repository/witness.repository';
import { AbstractService } from '../core/abstract.service';

export class WitnessService extends AbstractService<Witness> {

    repository = new WitnessRepository();

    async getValide() {
        const search = await this.repository.getValidated(1);
        return search;
    }

}
