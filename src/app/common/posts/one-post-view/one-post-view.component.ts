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
  postComments: IComment[] = [];
  postId: number;
  currentUser: IUser;

  ngOnInit() {
    window.scrollTo(0, 0);

    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      this.postId = +param;
      this.post$ = this.postService.getPost(this.postId);
      this.commentsService.getComments(this.postId)
        .subscribe((comments: IComment[]) => this.postComments = comments);
      this.currentUserService.get().subscribe(user => {
        this.currentUser = user;
      });
    }
  }

  deletePost(postId: number) {
    const deletePost = confirm('Are you sure to delete this post? ');
    if (deletePost) {
      this.postService.deletePost(postId)
        .subscribe(post => {
          console.log('Post deleted!');
          this.router.navigate(['users', this.currentUser.id]);
        });
    }
  }

  saveComment(comment) {
    this.commentsService
      .postComment(this.createComment(comment))
      .subscribe((postedComment: IComment) => {
        console.log('Your comment: "' + comment + '" was send to server');
        postedComment.user = this.currentUser;
        this.postComments.push(postedComment);
      });
  }

  private createComment(comment): IComment {
    return {
      postId: this.postId,
      userId: this.currentUser.id,
      comment: comment,
      date: new Date().toISOString()
    };
  }

  deleteComment(commentId: number) {
    this.commentsService.deleteComment(commentId)
      .subscribe(comment => {
        this.postComments = this.postComments.filter(commentItem => {
          return commentItem.id !== commentId;
        });
      });
  }
}
