/**
 * Cette classe est un modèle
 * Elle représente la forme de l'objet news
 */
export class News {

    public id!: number;
    public createAt!: string;
    public updateAt!: string;
    public deleteAt!: string;
    public type!: string;
    public title!: string;
    public description!: string;
    public link!: string;
    public user_id!: number;
    public status!: boolean;

    constructor(input: News) {
        Object.assign(this, input);
    }
}
