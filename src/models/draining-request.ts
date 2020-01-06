/**
 * Cette classe est un modèle
 * Elle représente la forme de l'objet DrainingRequest (demande de vidange)
 */
export class DrainingRequest {

    public id!: number;
    public createAt!: string;
    public updateAt!: string;
    public deleteAt!: string;
    public session_date!: string;
    public draining_id!: number;
    public user_id!: number;
    public slot_id!: number;

    constructor(input: DrainingRequest) {
        Object.assign(this, input);
    }
}
