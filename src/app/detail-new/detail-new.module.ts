import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailNewComponent } from './detail-new.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DetailNewComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    DetailNewComponent
  ]
})
export class DetailNewModule { }
