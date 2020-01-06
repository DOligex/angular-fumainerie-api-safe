import { Production } from '../models/production';
import { AbstractRepository } from '../core/abstract.repository';

export class ProductionRepository extends AbstractRepository<Production> {

    constructor() {
        super('production');
    }
}
