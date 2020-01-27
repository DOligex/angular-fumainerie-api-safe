import { UserService } from './user.service';
import { Home } from '../models/home';
import { HomeRepository } from '../repository/home.repository';
import { AbstractService } from '../core/abstract.service';
import { User } from 'src/models/user';

export class HomeService extends AbstractService<Home> {

        public repository: HomeRepository;
        public service: UserService;
        constructor() {
                super();
                this.repository = new HomeRepository();
                this.service = new UserService();
        }

        async saveHomeForm(home: Home, user: User) {
                home.user_id = user.id;
                const homeSave = await this.repository.save(home);
                if (!homeSave) {
                        throw new Error('La requete n\'a pas aboutit');
                }
                const updateUserAccountStatut = await this.service.updateUserAccount(user.id);
                if (!updateUserAccountStatut) {
                        throw new Error('Le statut n\'a pas pu être mis à jour');
                }
        }
        async saveDrainingRequest(home: Home, id: number) {
                const homeSave = await this.repository.saveHomeDraining(home, id);
                if (!homeSave) {
                        throw new Error('La requete n\'a pas aboutit');
                }

        }
}
