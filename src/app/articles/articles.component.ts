import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleTileComponent } from './article-tile/article-tile.component';
import { Article } from './article.model';
import { ArticlesService } from './articles.service';
@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule, ArticleTileComponent],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {
  articles: Article[] | undefined = this.articleService.getArticles();
  constructor(private articleService: ArticlesService){}
}
