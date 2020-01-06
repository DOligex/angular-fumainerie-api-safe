/**
 * Cette classe est un modèle
 * Elle représente la forme de l'objet Slot (créneau)
 */
export class Slot {

    public id!: number;
    public createAt!: string;
    public updateAt!: string;
    public deleteAt!: string;
    public startAt!: string;
    public endAt!: string;
    public name!: string;

    constructor(input: Slot) {
        Object.assign(this, input);
    }
}
