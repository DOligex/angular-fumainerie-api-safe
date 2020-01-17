/**
 * Cette classe est un modèle
 * Elle représente la forme de l'objet DrainingRequest (demande de vidange)
 */
export class DrainingRequest {

    public id!: number;
    public createAt!: string;
    public updateAt!: string;
    public deleteAt!: string;
    // tslint:disable-next-line: variable-name
    public session_date!: string;
    // tslint:disable-next-line: variable-name
    public draining_id!: number;
    // tslint:disable-next-line: variable-name
    public user_id!: number;
    // tslint:disable-next-line: variable-name
    public slot_id!: number;
    public emergency!: boolean;

    constructor(input: DrainingRequest) {
        Object.assign(this, input);
    }
}
