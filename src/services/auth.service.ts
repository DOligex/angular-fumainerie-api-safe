import { UserRepository } from '../repository/user.repository';
import { User } from '../models/user';
import { hash, verify } from 'argon2';

export class AuthService {

    private repository: UserRepository;
    constructor() {
        this.repository = new UserRepository();
    }

    async signUp(user: User) {
        console.log(user);

        user.password = await hash(user.password);
        const all = await this.repository.save(user);
        return all;
    }
    async signIn() {
        const all = await this.repository.findAll();
        return all;
    }
}
