import { UserRepository } from '../repository/user.repository';
import { User } from '../models/user';
import { AbstractService } from '../core/abstract.service';

export class UserService extends AbstractService<User> {

    repository = new UserRepository();

    async getBySearch(word: string) {
        const search = await this.repository.findByEmail(word);
        return search;
    }

    async updateUser(userId: number) {
        const user = await this.repository.updateStatuts(userId);
        return user;
    }
    async updateUserAccount(userId: number) {
        const user = await this.repository.updateAccountStatut(userId);
        return user;
    }
}
