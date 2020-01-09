import { AbstractRepository } from '../core/abstract.repository';
import { Token } from '../models/token';

export class TokenRepository extends AbstractRepository<Token> {

    constructor() {
        super('token');

    }

}
