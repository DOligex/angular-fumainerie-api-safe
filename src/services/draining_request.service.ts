import { DrainingRequest } from '../models/draining-request';
import { DrainingRequestRepository } from '../repository/draining-request.repository';
import { AbstractService } from '../core/abstract.service';
import { User } from 'src/models/user';

export class DrainingRequestService extends AbstractService<DrainingRequest> {

    repository = new DrainingRequestRepository();

    async getRequestDrainingByUserId(data: number) {
        return await this.repository.getByUserId(data);
    }
    }
