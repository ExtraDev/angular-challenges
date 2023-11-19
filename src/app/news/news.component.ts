import { Component, OnInit } from '@angular/core';
import { News } from '../common/models/news';
import { NewsService } from '../common/news.service';
import { tap, map, delay, debounceTime, throttleTime } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  private askNews = new Subject<boolean>();
  public loading = true;
  public news?: News[];
  public newsObservable$ = this.newsService.getNews$();
  public formatted$?: Observable<News[]>;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    // this.loadNews();
    this.format();

    this.askNews.pipe(
      tap(() => this.loading = true),
      tap(() => console.warn('event asked')),
      delay(1000),
      tap( () => this.loadNews())
    ).subscribe((value) => {
      console.log(!value, new Date().getTime());
    })
  }

  private format(): void {
    this.formatted$ = this.newsService.getNews$().pipe(
      map((fakeNews) =>
        fakeNews.map(fakeNew => {
          fakeNew.headline = `${fakeNew.id} : ${fakeNew.headline}`;
          return fakeNew;
        })
      )
    );
  }

  public reloadNews(): void {
    this.loadNews();
  }

  private loadNews(forceRefresh?:boolean): void {
    this.newsService
      .getNews$(forceRefresh)
      .pipe(
        tap(() => this.loading = false)
      )
      .subscribe((response) => (this.news = response));
  }

  public reloadNewsForceRefresh(): void{
    this.askNews.next(true);
    // this.loadNews(true);
  }
}
