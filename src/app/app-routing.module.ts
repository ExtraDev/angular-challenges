import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailNewComponent } from './detail-new/detail-new.component';
import { NewsComponent } from './news/news.component';
import { News } from './common/models/news';
import { BidonComponent } from './bidon/bidon.component';

const routes: Routes = [
  { path: '', component: NewsComponent },
  { path: 'bidon', component: BidonComponent },
  { path: 'detail/:id', component: DetailNewComponent },
  { path: 'directDetail', component: DetailNewComponent, data: {news: News}},
  { path: '**', component: NewsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
