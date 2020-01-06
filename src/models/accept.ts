/**
 * Cette classe est un modèle
 * Elle représente la forme de l'objet accept (validation de la demande de créneau table de liaison)
 */
export class Accept {

    public id!: number;
    public user_id!: number;
    public draining_request_id!: number;

    constructor(input: Accept) {
        Object.assign(this, input);
    }
}
