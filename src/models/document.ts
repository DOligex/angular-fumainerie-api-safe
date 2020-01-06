/**
 * Cette classe est un modèle
 * Elle représente la forme de l'objet Document (documents)
 */
export class Document {

    public id!: number;
    public createAt!: string;
    public updateAt!: string;
    public deleteAt!: string;
    public type!: string;
    public title!: string;
    public description!: string;
    public link!: string;
    public user_id!: number;

    constructor(input: Document) {
        Object.assign(this, input);
    }
}
