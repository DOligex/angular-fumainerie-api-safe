/**
 * Cette classe est un modèle
 * Elle représente la forme de l'objet Witness (témoignage)
 */
export class Question {

    public id!: number;
    public createAt!: string;
    public updateAt!: string;
    public deleteAt!: string;
    public topic!: string;
    public question!: string;
    public traited!: boolean;
    public user_id!: number;

    constructor(input: Question) {
        Object.assign(this, input);
    }
}
