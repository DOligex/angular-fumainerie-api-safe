import { User } from 'src/models/user';
/**
 * Cette classe est un modèle
 * Elle représente la forme de l'objet Witness (témoignage)
 */
export class Witness {

    public id!: number;
    public note!: number;
    public status!: boolean;
    public title!: string;
    public description!: string;
    public user_id!: number;
    public firstname!: string;
    public avatar!: string;
    public user!: User;

    constructor(input: Witness) {
        Object.assign(this, input);
    }
}
