import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { News } from './models/news';

@Injectable({
  providedIn: 'root', // Si pas providedIn, les modifications ne seront repercutiées
})
export class NewsService {
  private news?: News[];

  constructor(private http: HttpClient) {}

  getNews$(forceRefresh = false): Observable<News[]> {
    if(this.news && !forceRefresh) {
      console.log("cached");
      return of(this.news);
    }

    return this.http.get<{news: News[]}>('../../assets/news.json').pipe(
      // tap(news => console.log(news)),
      map(fakeNews => fakeNews.news),
      // tap(news => console.log(news)),
      map(fakeNews => fakeNews.map(fakeNew => Object.assign(new News(), fakeNew))),
      // tap(news =>console.log(news)),
      map(fakeNews => fakeNews.map(fakeNew => {
        fakeNew.headline = fakeNew.headline?.toUpperCase();
        return fakeNew;
      })),
      tap(fakeNews => {
        this.news = fakeNews;
        console.log("TOTO", this.news);
      })
    );
  }
}
