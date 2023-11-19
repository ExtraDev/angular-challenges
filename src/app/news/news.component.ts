import { Component, OnInit } from '@angular/core';
import { News } from '../common/models/news';
import { NewsService } from '../common/news.service';
import { response } from 'express';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  public news?: News[];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getNews$().pipe(
      tap(x => console.log(x))
    ).subscribe(response => this.news = response);
  }

}
