/**
 * Cette classe est un modèle
 * Elle représente la forme de l'objet Witness (témoignage)
 */
export class Witness {

    public id!: number;
    public createAt!: string;
    public updateAt!: string;
    public deleteAt!: string;
    public note!: number;
    public status!: boolean;
    public title!: string;
    public description!: string;
    public user_id!: number;

    constructor(input: Witness) {
        Object.assign(this, input);
    }
}
