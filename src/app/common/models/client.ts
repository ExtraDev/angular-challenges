export class Client {
    public id?: number;
    public firstname?: string;
    public lastname?: string;
    public address?: string;

    constructor(
        id: number,
        firstname: string,
        lastname: string,
        address: string
    ) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.address = address;
    }

    getFullName(): string {
        return `${this.firstname} ${this.lastname}`
    }
}