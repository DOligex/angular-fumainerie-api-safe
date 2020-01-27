import { DrainingRepository } from '../repository/draining.repository';
import { Draining } from '../models/draining';
import { AbstractService } from '../core/abstract.service';

export class DrainingService extends AbstractService<Draining> {

    repository = new DrainingRepository();

    async getDrainingByUserId(userId: number) {
        const drainings = await this.repository.getDraining(userId);
        return drainings;
    }
    async createDraining(userId: number) {
        return this.repository.createDraining(userId);
    }
    async update(userId: number) {
        return this.repository.update(userId);
    }
    async modifyDraining(element: Draining, id: number) {
        return this.repository.modifyDraining(element, id);
    }
    async getDrainingAccepted(userId: number) {
        return this.repository.getDrainingAccepted(userId);
    }

}
