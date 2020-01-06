import { Occupant } from '../models/occupant';
import { OccupantRepository } from '../repository/occupant.repository';
import { AbstractService } from '../core/abstract.service';

export class OccupantService extends AbstractService<Occupant> {

    repository = new OccupantRepository();

}
