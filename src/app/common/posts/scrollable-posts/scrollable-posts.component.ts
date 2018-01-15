import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/do';
import { PostService } from '../../services/posts.service';
import { IPostData } from '../../interfaces/postData';

@Component({
  selector: 'blog-scrollable-posts',
  templateUrl: './scrollable-posts.component.html',
  styleUrls: ['./scrollable-posts.component.css']
})
export class ScrollablePostsComponent implements OnInit {

  constructor(private postService: PostService) { }

  @Input() userId?: number;

  @Input() searchQuery$?: Observable<string> = Observable.of('');

  private page = 1;

  private isLoaded = false;

  private query: string;

  postData$: Observable<IPostData>;

  subject = new BehaviorSubject<number>(1);

  ngOnInit() {
    window.scrollTo(0, 0);
    this.searchQuery$.subscribe((searchQuery) => {
      this.page = 1;
      this.query = searchQuery;
      this.subject = new BehaviorSubject<number>(1);
      if (searchQuery) {
        console.log(`searched by "${searchQuery}"`);
      }

      this.postData$ = this.subject
        .switchMap((page: number) => {
          return this.postService.getPosts(page, 10, this.userId, this.query);
        })
        .do((postData: IPostData) => {
          if (postData.result.length < 10) {
            this.subject.complete();
          }
          this.isLoaded = true;
        })
        .scan((acc: IPostData, cur: IPostData) => {
          return { result: acc.result.concat(cur.result), total: cur.total };
        }, { result: [], total: null });
    }
    );
  }

  onScroll() {
    if (this.isLoaded && !this.subject.isStopped) {
      this.subject.next(++this.page);
      console.log(`infinite scroll event triggered, page: ${this.page}`);
    }
  }
}
