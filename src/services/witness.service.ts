import { Witness } from './../models/witness';
import { WitnessRepository } from './../repository/witness.repository';
import { AbstractService } from '../core/abstract.service';

export class WitnessService extends AbstractService<Witness> {

    // Un singeleton est une class ayant une instance unique a travers toute l'app
    repository = new WitnessRepository();

    async getRequestWitnessValided() {
        const witness = await this.repository.getValidated();
        return witness;
    }
}
