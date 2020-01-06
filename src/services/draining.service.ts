import { DrainingRepository } from '../repository/draining.repository';
import { Draining } from '../models/draining';
import { AbstractService } from '../core/abstract.service';

export class DrainingService extends AbstractService<Draining> {

    repository = new DrainingRepository();

    async getBySearch(word: string) {
        const search = await this.repository.searchDraining(word);
        return search;
    }

}
