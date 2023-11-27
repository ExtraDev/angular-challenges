import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bill } from './models/bill';
import { tap, map, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AccountsService {
    private bills?: Bill[];

    constructor(private httpClient: HttpClient) { }

    getBills$(): Observable<Bill[]> {
        return this.httpClient.get<Bill[]>('../../assets/bills.json').pipe(
            map((data: any) => data.bills),
            map((data) =>
                data.map((bill: Bill) => Object.assign(new Bill(), bill)),
            ),
            tap(bills =>
                this.bills = bills
            )
        )
    }

    getBillPayed$(): Observable<Bill[] | undefined> {
        return this.getBills$().pipe(
            map((bills) =>
                bills.filter((bill: Bill) => bill.isPayed === true)
            )
        )
    }

    getBillUnPayed$(): Observable<Bill[] | undefined> {
        return this.getBills$().pipe(
            map((bills) =>
                bills.filter((bill: Bill) => bill.isPayed !== true)
            )
        )
    }

    getBill$(id?: string): Observable<Bill | undefined> {
        return this.getBills$().pipe(
            map((bills) => bills.find((bill) => bill.id === id)),
            tap(bill => console.log(bill))
        )
    }
}
