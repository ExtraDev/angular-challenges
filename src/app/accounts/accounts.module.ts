import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { AccountComponent } from './account/account.component';
import { AccountsComponent } from './accounts.component';
import { HttpClientModule } from '@angular/common/http';
import localeFr from '@angular/common/locales/de-CH';
import { RouterModule } from '@angular/router';
import { AccountFormComponent } from './account-form/account-form.component';

registerLocaleData(localeFr);

@NgModule({
    declarations: [
        AccountComponent,
        AccountsComponent,
        AccountFormComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule
    ],
    exports: [
        AccountsComponent
    ]
})
export class AccountsModule { }
