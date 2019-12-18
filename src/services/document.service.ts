import { DocumentRepository } from '../repository/document.repository';
import { Document } from '../models/document';
import { AbstractService } from '../core/abstract.service';
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les documents doit apparaitre.
 * Attention ! Mettez le moins possible d'elements dans le controlleur
 */
export class DocumentService extends AbstractService<Document> {

    // Un singeleton est une class ayant une instance unique a travers toute l'app
    repository = new DocumentRepository();

    // Business logic

    // async getAll() {
    //     const all = await this.repository.findAll();
    //     return all;
    // }
    // Recherche des documents par mots dans site vitrine
    async getBySearch(word: string) {
        const search = await this.repository.searchDocument(word);
        return search;
    }

    // async getById(id: number) {
        // Vérification des données
        // if (!Number.isInteger(id)) {
        //     throw new Error('error');
        // }

        // Récupération du document
    //     return await this.repository.findById(id);
    // }

    // Upload du document
    // async upload(document: Document) {
    //     return this.repository.save(document);
    // }

    // Modification du document
    // async modifyDoc(document: Document, id: number) {
    //     return this.repository.modify(document, id);
    // }

    // Suppression du document
    // async deleteDoc(id: number) {
    //     return this.repository.delete(id);
    // }

}
