import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    NewsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    NewsComponent
  ]
})
export class NewsModule { }
