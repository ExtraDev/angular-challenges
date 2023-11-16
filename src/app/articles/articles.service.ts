import { Injectable } from '@angular/core';
import { ARTICLES } from './article.mock';
import { Article } from './article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  articles: Article[] = ARTICLES;
  
  constructor() { }

  getArticles(): Article[] {
    return this.articles;
  }

  getArticle(id: number): Article | undefined {
    return this.articles.find((article) => {
      return article.id == id;
    });
  }

  postArticle(article: any): void {
    article.id = this.articles.length + 1;
    this.articles.push(article);
  }
}
