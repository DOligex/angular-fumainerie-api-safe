/**
 * Cette classe est un modèle
 * Elle représente la forme de l'objet production
 */
export class Production {

    public id!: number;
    public createAt!: string;
    public updateAt!: string;
    public deleteAt!: string;
    public quantity!: string;
    public type!: string;

    constructor(input: Production) {
        Object.assign(this, input);
    }
}
