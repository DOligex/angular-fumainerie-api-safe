import { WitnessRepository } from './../repository/witness.repository';
import { Witness } from './../models/witness';

/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les Witnesss doit apparaitre.
 * Attention ! Mettez le moins possible d'elements dans le controlleur
 */
export class WitnessService {

    // Un singeleton est une class ayant une instance unique a travers toute l'app
    private repository: WitnessRepository;
    constructor() {
        this.repository = new WitnessRepository();
    }

    // Business logic

    async getAll() {
        const all = await this.repository.findAll();
        return all;
    }
    async getValided() {
        const valided = await this.repository.findValided();
        return valided;
    }

    async getById(id: number) {
        // Vérification des données
        if (!Number.isInteger(id)) {
            throw new Error('error');
        }

        // Récupération du Witness
        return await this.repository.findById(id);
    }

    // upload du Witness
    async upload(witness: Witness) {
        return this.repository.save(witness);
    }

    // modification du Witness
    async modifyWitness(witness: Witness, id: number) {
        return this.repository.modifyWitness(witness, id);
    }

    // suppression du Witness
    async deleteWitness(id: number) {
        return this.repository.deleteWitness(id);
    }

}
