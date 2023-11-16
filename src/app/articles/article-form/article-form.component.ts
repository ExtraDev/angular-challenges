import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ArticlesService } from '../articles.service';
import { Article } from '../article.model';

@Component({
  selector: 'app-article-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './article-form.component.html',
  styleUrl: './article-form.component.scss'
})
export class ArticleFormComponent {
  articleForm = new FormGroup({
    title: new FormControl<string>('', Validators.required),
    date: new FormControl<string>('', Validators.required),
    content: new FormControl<string>('', Validators.required),
    thumbnail: new FormControl(<string>'', Validators.required)
  })

  constructor(private articlesService: ArticlesService) {}

  createArticle() {
    this.articlesService.postArticle(this.articleForm.value);
  }

}
