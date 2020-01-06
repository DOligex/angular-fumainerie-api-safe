import { Occupant } from './../models/occupant';
import { AbstractRepository } from '../core/abstract.repository';

export class OccupantRepository extends AbstractRepository<Occupant> {

    constructor() {
        super('occupant');
    }

}
