/**
 * Cette classe est un modèle
 * Elle représente la forme de l'objet occupant
 */
export class Occupant {

    public id!: number;
    public createAt!: string;
    public updateAt!: string;
    public deleteAt!: string;
    public type!: string;
    public frequency!: string;
    public total_product!: string;

    constructor(input: Occupant) {
        Object.assign(this, input);
    }
}
