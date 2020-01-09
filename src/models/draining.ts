/**
 * Cette classe est un modèle
 * Elle représente la forme de l'objet draining(vidange)
 */
export class Draining {

    public id!: number;
    public createAt!: string;
    public updateAt!: string;
    public deleteAt!: string;
    public validationAt!: string;
    public cancellationAt!: string;
    public site_arrival_time!: string;
    public site_leave_time!: string;
    public check_date!: string;
    public comments!: string;
    public weight!: string;
    public sawdust_delivery!: string;
    public sawdust_weight!: string;
    public user_id!: number;
    public home_id!: number;
    public session_date!: string;
    public draining_id!: number;
    public slot_id!: number;

    constructor(input: Draining) {
        Object.assign(this, input);
    }
}
