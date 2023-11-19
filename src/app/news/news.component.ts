import { Component, OnInit } from '@angular/core';
import { News } from '../common/models/news';
import { NewsService } from '../common/news.service';
import { response } from 'express';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  public news?: News[];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getNews$().subscribe(response => this.news = response)
  }

}
