import { AbstractRepository } from './abstract.repository';

export abstract class AbstractService<T> {

    // Un singeleton est une class ayant une instance unique a travers toute l'app
    protected abstract repository: AbstractRepository<T>;

    async getAll() {
        const all = await this.repository.findAll();
        return all;
    }

    async getById(id: number) {
        // Vérification des données
        if (!Number.isInteger(id)) {
            throw new Error('error');
        }

        // Récupération de l'élément
        return await this.repository.findById(id);
    }

    // Modification de l'élément
    async modifyElement(element: T, id: number) {
        return this.repository.modify(element, id);
    }
    // Suppression de l'élément
    async deleteElement(id: number) {
        return this.repository.delete(id);
    }

    // Upload de l'élément
    async upload(element: T) {
        return this.repository.save(element);
    }

}
