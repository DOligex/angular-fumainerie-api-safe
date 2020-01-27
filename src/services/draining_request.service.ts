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
        const arrayA = [];
        const useridArray: number[] = [];
        allDraining.filter((element: { user_id: number; }) => useridArray.push(element.user_id));
        const realUserIdArray = Array.from(new Set(useridArray));
        for (const user of realUserIdArray) {
            const depart = user;
            arrayA.push(allDraining.filter((object: { user_id: number; }) => object.user_id === depart));
        }

        return arrayA;
    }

    }
