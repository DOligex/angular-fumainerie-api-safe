import { AbstractRepository } from '../core/abstract.repository';
import { Slot } from '../models/slot';

export class SlotRepository extends AbstractRepository<Slot> {

    constructor() {
        super('slot');
    }
}
