import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account/account.component';
import { AccountsComponent } from './accounts.component';

@NgModule({
  declarations: [
    AccountComponent,
    AccountsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AccountsComponent
  ]
})
export class AccountsModule { }
