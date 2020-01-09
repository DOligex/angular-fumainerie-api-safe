import { AbstractService } from '../core/abstract.service';
import { Token } from '../models/token';
import { TokenRepository } from '../repository/token.repository';

export class TokenService extends AbstractService<Token> {

    repository = new TokenRepository();

    async getDrainingByUserId(userId: number) {
        const drainings = await this.repository.getDraining(userId);
        return drainings;
    }

}
