import { Document } from './../models/document';
import { DbHandler } from './db.handler';

export class DocumentRepository {

    private GET_ALL = 'SELECT * FROM document;';
    private GET_BY_ID = 'SELECT * FROM document where id =';
    private POST_BY_ID = 'INSERT INTO document SET ?';
    private PUT_BY_ID = 'UPDATE document SET ? WHERE id = ?';
    private DEL_BY_ID = 'DELETE document SET ? WHERE id = ?';

    private db: DbHandler;

    constructor() {
        this.db =  DbHandler.getInstance();

    }

    async findAll() {
        // this.db.query(this.GET_ALL).then((reust) => {
        //     console.log(reust);
        // });

        // Ou alors on peut ecrire =>
        const result = await this.db.query(this.GET_ALL);
        return result;
    }

    async findById(id: number) {
        const document = await this.db.query(this.GET_BY_ID + id);
        return document;
    }

    async save(document: Document) {
        // votre code ici
        const postDoc = await this.db.query(this.POST_BY_ID, document);
        return postDoc;
    }
    async modify(document: Document, id: number) {
        const modifyDoc = await this.db.query(this.PUT_BY_ID, [document, id]);
        return modifyDoc;
    }
    async delete(id: number) {
        const deleteDoc = await this.db.query(this.DEL_BY_ID + id);
        return deleteDoc;
    }
}
