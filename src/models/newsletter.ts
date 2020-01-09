export class Newsletter {

    public id!: number;
    public email!: string;
    constructor(input: Newsletter) {
        Object.assign(this, input);
    }
}
