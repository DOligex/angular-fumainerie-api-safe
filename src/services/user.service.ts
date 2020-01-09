import { UserRepository } from '../repository/user.repository';
import { User } from '../models/user';
import { AbstractService } from '../core/abstract.service';

export class UserService extends AbstractService<User> {

    repository = new UserRepository();

    async getBySearch(word: string) {
        const search = await this.repository.findByEmail(word);
        return search;
    }

}