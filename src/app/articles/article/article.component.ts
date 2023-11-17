import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ArticlesService } from '../articles.service';
import { Article } from '../article.model';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent implements OnInit {
  idArticle: number = 0;
  article: Article | undefined;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticlesService) {
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.idArticle = Number(routeParams.get('id'));
    this.article = this.articleService.getArticle(this.idArticle);

    if(this.article === undefined) {
      this.router.navigate(['404NotFound'])
    }
  }
}
