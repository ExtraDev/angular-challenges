import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { News } from './models/news';
import { fakeAsync } from '@angular/core/testing';

@Injectable({
    providedIn: 'root', // Si pas providedIn, les modifications ne seront repercutiées
})
export class NewsService {
    private news?: News[];

    constructor(private http: HttpClient) {}

    getNews$(forceRefresh = false): Observable<News[]> {
        if (this.news && !forceRefresh) {
            console.log('cached');
            return of(this.news);
        }

        return this.http.get<{ news: News[] }>('../../assets/news.json').pipe(
            // tap(news => console.log(news)),
            map((fakeNews) => fakeNews.news),
            // tap(news => console.log(news)),
            map((fakeNews) =>
                fakeNews.map((fakeNew) => Object.assign(new News(), fakeNew))
            ),
            // tap(news =>console.log(news)),
            map((fakeNews) =>
                fakeNews.map((fakeNew) => {
                    fakeNew.headline = fakeNew.headline?.toUpperCase();
                    return fakeNew;
                })
            ),
            tap((fakeNews) => {
                this.news = fakeNews;
                console.log('TOTO', this.news);
            })
        );
    }

    public getNew$(id?: number): Observable<News | undefined> {
        return this.getNews$().pipe(
            tap((x) => console.log(' -> ', x, 18)),
            map((fakeNews) => fakeNews.find((fakeNew) => fakeNew.id === id))
        );
    }
}
