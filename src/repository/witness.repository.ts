import { Witness } from './../models/witness';
import { DbHandler } from './db.handler';

export class WitnessRepository {

    private GET_ALL = 'SELECT * FROM witness ';
    private GET_BY_ID = 'SELECT * FROM witness WHERE id = ?';
    private POST_BY_ID = 'INSERT INTO witness SET ?';
    private PUT_BY_ID = 'UPDATE witness SET ? WHERE id = ?';
    private DEL_BY_ID = 'DELETE FROM witness WHERE id = ?';

    private db: DbHandler;

    constructor() {
        this.db =  DbHandler.getInstance();
    }

    async findAll() {

        const result = await this.db.query(this.GET_ALL);
        return result;
    }

    async findById(id: number) {
        const witness = await this.db.query(this.GET_BY_ID , id);
        return witness;
    }

    async save(witness: Witness) {
        const postWitness = await this.db.query(this.POST_BY_ID, witness);
        return postWitness;
    }

    async modifyWitness(witness: Witness, id: number) {
        const modifyWitness = await this.db.query(this.PUT_BY_ID, [witness, id]);
        return modifyWitness;
    }

    async deleteWitness(id: number) {
        const deleteWitness = await this.db.query(this.DEL_BY_ID , id);
        return deleteWitness;
    }
}
