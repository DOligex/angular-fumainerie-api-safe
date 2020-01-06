import { SportRepository } from '../repository/sport.repository';
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les psort doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controlleur
 */
export class SportService {

    // Un singeleton est une class ayant une instance unique a travers toute l'app
    private repository: SportRepository;
    constructor() {
        this.repository = new SportRepository();
    }

    // Business logic

    // getAll() {
    //     return this.repository.findAll();
    // }

    // getById(id: number) {
    //     // return this.repository.findById(id);
    // }

    // addSport(sport: any) {
    //     // return this.repository.save(sport);
    // }
}
