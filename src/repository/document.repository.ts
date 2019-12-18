import { Document } from './../models/document';
import { AbstractRepository } from '../core/abstract.repository';

export class DocumentRepository extends AbstractRepository<Document> {

    constructor() {
        super('document');
    }

    // private GET_ALL = 'SELECT * FROM document;';
    // private GET_BY_ID = 'SELECT * FROM document where id = ?';
    private GET_DOC_BY_SEARCH = 'SELECT * FROM document WHERE title LIKE ? OR description LIKE ?' ;
    // private POST_BY_ID = 'INSERT INTO document SET ?';
    // private PUT_BY_ID = 'UPDATE document SET ? WHERE id = ?';
    // private DEL_BY_ID = 'DELETE FROM document WHERE id = ?';

    // Recherche des documents avec barre de recherche
    async searchDocument(word: string) {
        const searchWord = '%' + word + '%';
        const result = await this.db.query(this.GET_DOC_BY_SEARCH, [searchWord, searchWord]);
        return result;
    }

    // async findById(id: number) {
    //     const document = await this.db.query(this.GET_BY_ID , id);
    //     return document;
    // }

    // async save(document: Document) {
    //     const postDoc = await this.db.query(this.POST_BY_ID, document);
    //     return postDoc;
    // }

    // async modify(document: Document, id: number) {
    //     const modifyDoc = await this.db.query(this.PUT_BY_ID, [document, id]);
    //     return modifyDoc;
    // }

    // async delete(id: number) {
    //     const deleteDoc = await this.db.query(this.DEL_BY_ID , id);
    //     return deleteDoc;
    // }
}
