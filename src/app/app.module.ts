import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsModule } from './news/news.module';
import { DetailNewModule } from './detail-new/detail-new.module';
import { BidonModule } from './bidon/bidon.module';

@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NewsModule,
    DetailNewModule,
    BidonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
