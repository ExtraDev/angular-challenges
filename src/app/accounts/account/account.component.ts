import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';
import { AccountsService } from 'src/app/common/accounts.service';
import { Bill } from 'src/app/common/models/bill';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

    bill$ = this.loadBill();

    constructor(private route: ActivatedRoute,
        private accountService: AccountsService) { }

    ngOnInit(): void { }

    private loadBill(): Observable<Bill | undefined> {
        return this.route.params.pipe(
            map(params => new Bill(params['id'])),
            switchMap(tempBill => this.accountService.getBill$(tempBill.id))
        )
    }
}
