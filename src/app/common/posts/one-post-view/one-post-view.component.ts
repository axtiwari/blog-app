import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';
import { ActivatedRoute, Router } from '@angular/router';
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
    private currentUserService: CurrentUserService,
    private router: Router
  ) { }
  post$: Observable<IPost> = Observable.of();
  postComments$: Observable<IComment[]> = Observable.of();
  userId: number;

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.post$ = this.postService.getPost(id);
      this.postComments$ = this.commentsService.getComments(id);
      this.currentUserService.get().subscribe(user => {
        this.userId = user ? user.id : null;
      });
    }
  }

  deletePost(postId: number) {
    const deletePost = confirm('Are you sure to delete this post? ');
    if (deletePost) {
      this.postService.deletePost(postId)
      .subscribe(post => {
        console.log('Post deleted!');
        this.router.navigate(['users', this.userId]);
      });
    }
  }
}
