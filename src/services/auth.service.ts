import { UserRepository } from '../repository/user.repository';
import { User } from '../models/user';
import { hash, verify } from 'argon2';
import { sign } from 'jsonwebtoken';

export class AuthService {

    private repository: UserRepository;
    constructor() {
        this.repository = new UserRepository();
    }

    async signUp(user: User) {
        const userEmail = await this.repository.findByEmail(user.email);
        if (userEmail == null || undefined) {
        user.password = await hash(user.password);
        const all = await this.repository.save(user);
        return all;
        } else {
            throw new Error('Mail already used');
        }
    }

    async signIn(email: string, password: string) {
        const user = await this.repository.findByEmail(email);
        const error = new Error('Invalid credentials');

        if (!user) {
            throw error;
        }
        const isValid = await verify(user.password, password);
        if (!isValid) {
            throw error;
        }

        const payload = {id: user.id, email: user.email, firstname: user.firstname, accountStatus: user.account_status};
        if (!process.env.WILD_JWT_SECRET) {
            throw new Error('Server is not correctly configured');
        }

        const token = sign (payload, process.env.WILD_JWT_SECRET as string);

        return token;
    }
}
