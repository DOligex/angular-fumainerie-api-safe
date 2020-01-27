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
    // tslint:disable-next-line: variable-name
    public site_arrival_time!: string;
    // tslint:disable-next-line: variable-name
    public site_leave_time!: string;
    // tslint:disable-next-line: variable-name
    public check_date!: string;
    public comments!: string;
    public weight!: string;
    // tslint:disable-next-line: variable-name
    public sawdust_delivery!: string;
    // tslint:disable-next-line: variable-name
    public sawdust_weight!: string;
    // tslint:disable-next-line: variable-name
    public user_id!: number;
    // tslint:disable-next-line: variable-name
    public home_id!: number;
    // tslint:disable-next-line: variable-name
    public session_date!: string;
    // tslint:disable-next-line: variable-name
    public draining_id!: number;
    // tslint:disable-next-line: variable-name
    public slot_id!: number;

    constructor(input: Draining) {
        Object.assign(this, input);
    }
}
