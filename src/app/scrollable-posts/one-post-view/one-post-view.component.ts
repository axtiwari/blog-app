import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';
import { ActivatedRoute} from '@angular/router';
import { PostService } from '../../posts/posts.service';
import { IPost } from '../../posts/post';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { IComment } from '../../posts/comment';
import { CommentsService } from '../../posts/comments.service';

@Component({
  selector: 'blog-one-post-view',
  templateUrl: './one-post-view.component.html',
  styleUrls: ['./one-post-view.component.css']
})
export class OnePostViewComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private commentsService: CommentsService
  ) { }
    post$: Observable<IPost> = Observable.of();
    postComments$: Observable<IComment[]> = Observable.of();

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.post$ = this.postService.getPost(id);
      this.postComments$ = this.commentsService.getComments(id);
    }
  }
}
