import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../common/accounts.service';
import { Bill } from '../common/models/bill';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-accounts',
    templateUrl: './accounts.component.html',
    styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
    public bills$ = this.accountService.getBills$();

    constructor(private accountService: AccountsService) { }

    ngOnInit(): void {
        console.log(this.bills$);
        // console.log(this.bills$);
    }

}
