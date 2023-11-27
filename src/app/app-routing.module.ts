import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccountComponent } from './accounts/account/account.component';
import { AccountFormComponent } from './accounts/account-form/account-form.component';

const routes: Routes = [
    {
        path: '',
        component: AccountsComponent
    }, {
        path: 'account/:id',
        component: AccountComponent
    }, {
        path: 'create',
        component: AccountFormComponent
    }, {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
