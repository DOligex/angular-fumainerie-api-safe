import { Home } from './../models/home';
import { AbstractRepository } from '../core/abstract.repository';

export class HomeRepository extends AbstractRepository<Home> {

    constructor() {
        super('home');

    }
}
