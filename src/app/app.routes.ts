import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ArticleFormComponent } from './articles/article-form/article-form.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './articles/article/article.component';

export const routes: Routes  = [
    { path: '', component: ArticlesComponent },
    { path: 'create', component: ArticleFormComponent },
    { path: 'article/:id', component: ArticleComponent },
    { path: '**', component: AppComponent}
]