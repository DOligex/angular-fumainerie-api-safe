import { DrainingRequest } from '../models/draining-request';
import { DrainingRequestRepository } from '../repository/draining-request.repository';
import { AbstractService } from '../core/abstract.service';

export class DrainingRequestService extends AbstractService<DrainingRequest> {

    repository = new DrainingRequestRepository();

    async getRequestDrainingByUserId() {
        return await this.repository.getByUserId();
    }
    }
