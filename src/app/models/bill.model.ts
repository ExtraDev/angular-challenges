import { Client } from "./client.model";

export class Bill {
  id: number | undefined;
  name: string;
  date: Date;
  amount: number;
  payed: boolean = false;
  client: Client | undefined;

  constructor(name: string, date: Date, amount: number, payed: boolean) {
    this.name = name;
    this.date = date;
    this.amount = amount;
    this.payed = payed;
  }

  public getBill(): Bill {
    return this;
  }

  public toString() : string {
    return "";
  }
}
