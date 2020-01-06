import { Home } from '../models/home';
import { HomeRepository } from '../repository/home.repository';
import { AbstractService } from '../core/abstract.service';

export class HomeService extends AbstractService<Home> {

        repository = new HomeRepository();
}
