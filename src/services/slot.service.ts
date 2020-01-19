import { Slot } from '../models/slot';
import { SlotRepository } from '../repository/slot.repository';
import { AbstractService } from '../core/abstract.service';

export class SlotService extends AbstractService<Slot> {

    repository = new SlotRepository();

}
