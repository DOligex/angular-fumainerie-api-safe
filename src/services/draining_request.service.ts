import { DrainingRequest } from '../models/draining-request';
import { DrainingRequestRepository } from '../repository/draining-request.repository';
import { AbstractService } from '../core/abstract.service';

export class DrainingRequestService extends AbstractService<DrainingRequest> {

    repository = new DrainingRequestRepository();

    async getRequestDrainingByUserId(userId: number) {
        const draining = await this.repository.getByUserId(userId);
        return draining;
    }
    async getAllDrainingRequestUnchecked() {
        const allDraining = await this.repository.getAllDrainingRequestUnchecked();
        return allDraining;
    }

    }
