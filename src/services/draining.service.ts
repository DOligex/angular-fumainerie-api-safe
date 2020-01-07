import { isNumber } from 'util';
import { DrainingRepository } from '../repository/draining.repository';
import { Draining } from '../models/draining';
import { AbstractService } from '../core/abstract.service';

export class DrainingService extends AbstractService<Draining> {

    repository = new DrainingRepository();

    async getDrainingByUserId(userId: number) {
        const search = await this.repository.getDraining(userId);
        return search;
    }

}
