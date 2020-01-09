import { isNumber } from 'util';
import { DrainingRepository } from '../repository/draining.repository';
import { Draining } from '../models/draining';
import { AbstractService } from '../core/abstract.service';
import { DrainingRequest } from '../models/draining-request';

export class DrainingService extends AbstractService<Draining> {

    repository = new DrainingRepository();

    async getDrainingByUserId(userId: number) {
        const drainings = await this.repository.getDraining(userId);
        return drainings;
    }

    async getNextDrainingByUserId(userId: number) {
        const draining = await this.repository.getNextDraining(userId);
        return draining;
    }

    async createDraining(userId: number) {
        return this.repository.createDraining(userId);
    }
}
