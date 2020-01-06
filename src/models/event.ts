/**
 * Cette classe est un modèle
 * Elle représente la forme de l'objet Event (évenement)
 */
export class Event {

    public id!: number;
    public createAt!: string;
    public updateAt!: string;
    public deleteAt!: string;
    public author!: string;
    public date!: string;
    public description!: string;
    public user_id!: number;

    constructor(input: Event) {
        Object.assign(this, input);
    }
}
