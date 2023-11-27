import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bill } from './models/bill';
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AccountsService {
    private bills?: Bill[];

    constructor(private httpClient: HttpClient) { }

    getBills$(): Observable<Bill[]> {
        return this.httpClient.get<Bill[]>('../../assets/bills.json').pipe(
            // tap((data) => console.log(data)),
            map((data: any) => data.bills),
            map((data) =>
                data.map((bill: Bill) => Object.assign(new Bill(), bill))
            ),
            tap(bills => {
                this.bills = bills
                console.log(this.bills);
            })
        )
    }
}
