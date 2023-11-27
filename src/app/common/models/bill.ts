import { Client } from "./client";
import { Product } from "./product";

export class Bill {
    public id?: string;
    public date?: Date;
    public payedUntil?: Date;
    public name?: string;
    public isPayed?: boolean;
    public client?: Client;
    public products?: Product[]

    constructor(
        id?: string,
        date?: Date,
        payedUntil?: Date,
        name?: string,
        isPayed?: boolean,
        client?: Client,
        products?: Product[]
    ) {
        this.id = id;
        this.date = date;
        this.payedUntil = payedUntil;
        this.name = name;
        this.isPayed = isPayed;
        this.client = client;
        this.products = products;
    }
}