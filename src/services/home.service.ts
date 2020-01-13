import { Token } from './../models/token';
import { UserService } from './user.service';
import { Home } from '../models/home';
import { HomeRepository } from '../repository/home.repository';
import { AbstractService } from '../core/abstract.service';

export class HomeService extends AbstractService<Home> {

        public repository: HomeRepository;
        public service: UserService;
        constructor() {
                super();
                this.repository = new HomeRepository();
                this.service = new UserService();
        }

        async saveHomeForm(home: Home, id: number) {
                const homeSave = await this.repository.saveHomeDetails(home, id);
                if (!homeSave) {
                        throw new Error('La requete n\'a pas aboutit');
                }
                // const updateUserAccountStatut = await this.service.updateUserAccount();
        }
}
