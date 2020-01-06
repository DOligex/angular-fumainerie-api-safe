/**
 * Cette classe est un modèle
 * Elle représente la forme de l'objet home
 */
export class Home {

    public id!: number;
    public createAt!: string;
    public updateAt!: string;
    public deleteAt!: string;
    public type!: string;
    public address!: string;
    public address_plus!: string;
    public zip!: number;
    public city!: string;
    public emptying_story!: string;
    public startAt!: string;
    public people!: string;
    public adult_nbr!: number;
    public child_nbr!: number;
    public rapport!: string;
    public user_id!: number;

    constructor(input: Home) {
        Object.assign(this, input);
    }
}
