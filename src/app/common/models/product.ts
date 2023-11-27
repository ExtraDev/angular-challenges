export class Product {
    private id: number;
    private name: string;
    private price: number;

    constructor(
        id: number,
        name: string,
        price: number
    ) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    public print(): void {
        console.log(`Product id:${this.id} name: ${this.name} price: ${this.price}`);
    }
}