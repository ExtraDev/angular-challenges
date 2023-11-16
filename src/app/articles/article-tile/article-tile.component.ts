import { Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Article } from '../article.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-article-tile',
  standalone: true,
  imports: [CommonModule, RouterLink, NgOptimizedImage],
  templateUrl: './article-tile.component.html',
  styleUrl: './article-tile.component.scss'
})
export class ArticleTileComponent {
  @Input() article!: Article;
}
