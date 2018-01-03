import { Component, OnInit, Input} from '@angular/core';
import { PostService } from '../posts/posts.service';
import { Observable } from 'rxjs/Observable';
import { IPost } from '../posts/post';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/do';

@Component({
  selector: 'blog-scrollable-posts',
  templateUrl: './scrollable-posts.component.html',
  styleUrls: ['./scrollable-posts.component.css']
})
export class ScrollablePostsComponent implements OnInit {

  constructor(private postService: PostService) { }

  @Input() userId?: number;

  posts$: Observable<IPost[]>;

  private page = 1;

  subject = new BehaviorSubject<number>(1);

  private isLoaded = false;

  ngOnInit() {
    this.posts$ = this.subject
      .switchMap((page: number) => {
        return this.postService.getPosts(page, 10, this.userId);
      })
      .do((posts: IPost[]) => {
        if (posts.length < 10) {
          this.subject.complete();
        }
        this.isLoaded = true;
      })
      .scan((acc: IPost[], cur: IPost[]) => acc.concat(cur), []);
  }

  onScroll() {
    if (this.isLoaded && !this.subject.isStopped) {
      this.subject.next(++this.page);
      console.log(`infinite scroll event triggered, page: ${this.page}`);
    }
  }
}
