import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-account-form',
    templateUrl: './account-form.component.html',
    styleUrls: ['./account-form.component.scss']
})
export class AccountFormComponent implements OnInit {
    public accountForm = new FormGroup({
        id: new FormControl<string | undefined>('FR-', Validators.required),
        name: new FormControl<string | undefined>('', Validators.required),
        date: new FormControl<Date | undefined>(new Date(), Validators.required),
        payedUntil: new FormControl<Date | undefined>(new Date(), Validators.required),
    })

    constructor() { }

    ngOnInit(): void { }

    createBill(): void {
        console.log(this.accountForm.value);

    }

    addProduct(): void {
        console.log("des");
    }

}
