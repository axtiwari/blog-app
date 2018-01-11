import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';
import { ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { PostService } from '../../services/posts.service';
import { CommentsService } from '../../services/comments.service';
import { IPost } from '../../interfaces/post';
import { IComment } from '../../interfaces/comment';
import { CurrentUserService } from '../../services/current-user.service';
import { IUser } from '../../interfaces/user';

@Component({
  selector: 'blog-one-post-view',
  templateUrl: './one-post-view.component.html',
  styleUrls: ['./one-post-view.component.css']
})
export class OnePostViewComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private commentsService: CommentsService,
    private currentUserService: CurrentUserService
  ) { }
    post$: Observable<IPost> = Observable.of();
    postComments$: Observable<IComment[]> = Observable.of();
    currentUser$: Observable<IUser> = Observable.of();

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.post$ = this.postService.getPost(id);
      this.postComments$ = this.commentsService.getComments(id);
      this.currentUser$ = this.currentUserService.get();
    }
  }
}
