import { AbstractRepository } from '../core/abstract.repository';
import { Token } from '../models/token';

export class TokenRepository extends AbstractRepository<Token> {
    private GET_BY_ID_TOKEN = 'SELECT * FROM token WHERE value = ?';

    constructor() {
        super('token');
    }

    async getValue(str: string) {
        const result: any = await this.db.query(this.GET_BY_ID_TOKEN, str);
        return result[0];
    }

}
