import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, switchMap, tap } from 'rxjs/operators';
import { News } from '../common/models/news';
import { NewsService } from '../common/news.service';
import { Observable, merge } from 'rxjs';

@Component({
  selector: 'app-detail-new',
  templateUrl: './detail-new.component.html',
  styleUrls: ['./detail-new.component.scss']
})
export class DetailNewComponent implements OnInit {
  // public new?: News;

  public new$ = this.loadNews$();

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService
    ) { }

  ngOnInit(): void {
    this.route.data.pipe(
      tap(x => console.log("ici", x))
    ).subscribe();

    // this.loadNews$().subscribe(news => {
    //   // this.new = news;
    // });

  }

  private loadNews$(): Observable<News | undefined> {
    return this.route.params.pipe(
      map(params => new News(+params['id'])),
      switchMap(tempNew => this.newsService.getNew$(tempNew.id)),
    );
  }

}
