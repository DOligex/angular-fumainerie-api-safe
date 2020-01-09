import { AbstractService } from '../core/abstract.service';
import { Token } from '../models/token';
import { TokenRepository } from '../repository/token.repository';

export class TokenService extends AbstractService<Token> {

    repository = new TokenRepository();

    // async getDrainingByUserId(userId: number) {
    //     const drainings = await this.repository.getDraining(userId);
    //     return drainings;
    // }
    async create(token: Token) {
        token = this.repository.create(token);
        return this.repository.save(token);
    }

    async getByValue( value: string) {
        return this.repository.findAll({value});
    }

}
