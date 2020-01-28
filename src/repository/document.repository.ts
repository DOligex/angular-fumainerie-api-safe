import { Document } from './../models/document';
import { AbstractRepository } from '../core/abstract.repository';

export class DocumentRepository extends AbstractRepository<Document> {

    constructor() {
        super('document');
    }

    private GET_DOC_BY_SEARCH = 'SELECT * FROM document WHERE title LIKE ? OR description LIKE ?' ;
    private GET_VALIDED = 'SELECT * FROM document WHERE status = 1';

    // Recherche des documents avec barre de recherche
    async searchDocument(word: string) {
        const searchWord = '%' + word + '%';
        const result = await this.db.query(this.GET_DOC_BY_SEARCH, [searchWord, searchWord]);
        return result;
    }

    async getValidated(status: number) {
        // this.db.query(this.GET_VALIDED, [this.GET_VALIDED]) 🤨
        // Le deuxième paramètre de la fonction est la valeur du "?" heureusmeent il n'y en a pas 🤨
        const result = await this.db.query(this.GET_VALIDED);
        return result;
    }
}
