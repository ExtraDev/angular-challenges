import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account/account.component';
import { AccountsComponent } from './accounts.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AccountComponent,
    AccountsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    AccountsComponent
  ]
})
export class AccountsModule { }
