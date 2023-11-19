import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { News } from './models/news';

@Injectable({
  providedIn: 'root', // Si pas providedIn, les modifications ne seront repercutiées
})
export class NewsService {
  constructor(private http: HttpClient) {}

  getNews$(): Observable<News[]> {
    return this.http.get<{news: News[]}>('../../assets/news.json').pipe(
      tap(news => console.log(news)),
      map(fakeNews => fakeNews.news),
      tap(news => console.log(news)),
      map(fakeNews => fakeNews.map(fakeNew => Object.assign(new News(), fakeNew))),
      tap(news =>console.log(news)),
      map(fakeNews => fakeNews.map(fakeNew => {
        fakeNew.headline = fakeNew.headline?.toUpperCase();
        return fakeNew;
      }))
    );
  }
}
