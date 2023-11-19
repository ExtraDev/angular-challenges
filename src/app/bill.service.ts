import { Injectable } from "@angular/core";
import { BILLS } from "./bill.mock";
import { Bill } from "./models/bill.model";

@Injectable({
  providedIn: "root",
})
export class BillService {
  bills: Bill[] = BILLS;

  constructor() {}

  getBills() {
    return this.bills;
  }
}
