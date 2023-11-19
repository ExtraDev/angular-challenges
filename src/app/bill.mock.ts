import { Bill } from "./models/bill.model";

export const BILLS: Bill[] = [
    new Bill("Facture 1", new Date(), 1500, false),
    new Bill("Facture 2", new Date(), 750, false),
    new Bill("Facture 3", new Date(), 125.5, false),
    new Bill("Facture 4", new Date(), 12, true),
    new Bill("Facture 5", new Date(), 56, true),
    new Bill("Facture 6", new Date(), 10000, true)
];
