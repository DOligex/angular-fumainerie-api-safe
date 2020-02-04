import { DrainingRequest } from './../models/draining-request';
import { DrainingRepository } from '../repository/draining.repository';
import { Draining } from '../models/draining';
import { AbstractService } from '../core/abstract.service';
import { DrainingRequestService } from './draining_request.service';

export class DrainingService extends AbstractService<Draining> {
    service = new DrainingRequestService();
    repository = new DrainingRepository();

    async getDrainingByUserId(userId: number) {
        const drainings = await this.repository.getDraining(userId);
        return drainings;
    }
    async createDraining(userId: number, drainingRequest: any[]) {
        const idDrainingCreated = await this.repository.createDraining(userId);
        for (const request of drainingRequest) {
            delete request.name;
            request.draining_id = idDrainingCreated;
            await this.service.save(request);
        }
        return idDrainingCreated;
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
    async getDrainingDone(userId: number) {
        return await this.repository.getDrainingDone(userId);
    }
    async getNextDrainingByUserId(userId: number) {
        const draining = await this.repository.getNextDraining(userId);
        return draining;
    }

}
