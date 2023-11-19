import { Component } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Bill } from './models/bill.model';
import { BillService } from './bill.service';
import localeFr from '@angular/common/locales/de-CH';

registerLocaleData(localeFr);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'billing';
  bills: Bill[] = this.billService.getBills();

  constructor(private billService: BillService){}

  computeAmountPayed() : number[] {
    let totalPayed = 0;
    let totalUnpayed = 0;

    for(let bill of this.bills) {
      if(bill.payed)
        totalPayed += bill.amount;
      else
        totalUnpayed += bill.amount; 
    }

    return [totalPayed, totalUnpayed];
  }
}
