export class Client {
    private id: number;
    private firstname: string;
    private lastname: string;
    private address: string;

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


}