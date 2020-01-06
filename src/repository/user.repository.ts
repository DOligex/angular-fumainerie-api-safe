import { User } from '../models/user';
import { AbstractRepository } from '../core/abstract.repository';

export class UserRepository extends AbstractRepository<User> {

    private GET_BY_EMAIL = 'SELECT * FROM user WHERE email = ?;';

    constructor() {
        super('user');

    }

    //     async findByEmail(email: string) {
    //         const searchEmail = '%' + email + '%';
    //         const result = await this.db.query(this.GET_BY_EMAIL, [searchEmail, searchEmail]);
    //         return result;
    //     }

    async findByEmail(email: string) {
        const users = await (this.db.query(this.GET_BY_EMAIL, email) as Promise<User[]>);
        return users[0] || null;
    }
}
