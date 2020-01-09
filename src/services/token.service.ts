import { AbstractService } from '../core/abstract.service';
import { Token } from '../models/token';
import { TokenRepository } from '../repository/token.repository';

export class TokenService extends AbstractService<Token> {

    repository = new TokenRepository();

    async create(token: Token) {
        return await this.repository.save(token);
    }

    async getByValue(value: string) {
        return await this.repository.getValue(value);
    }

}
