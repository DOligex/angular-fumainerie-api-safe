import { Production } from '../models/production';
import { ProductionRepository } from '../repository/production.repository';
import { AbstractService } from '../core/abstract.service';

export class ProductionService extends AbstractService<Production> {

        repository = new ProductionRepository();

}
