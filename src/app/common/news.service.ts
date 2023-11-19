import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from './models/news';

@Injectable({
  providedIn: 'root' // Si pas providedIn, les modifications ne seront repercutiées
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNews$(): Observable<News[]> {
    return this.http.get<News[]>('/api');
  }
}
