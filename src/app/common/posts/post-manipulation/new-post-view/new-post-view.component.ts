import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { CurrentUserService } from '../../../services/current-user.service';
import { IUser } from '../../../interfaces/user';
import { IPost } from '../../../interfaces/post';
import { PostService } from '../../../services/posts.service';

@Component({
  selector: 'blog-new-post-view',
  templateUrl: './new-post-view.component.html',
  styleUrls: ['./new-post-view.component.css']
})
export class NewPostViewComponent implements OnInit {

  constructor(
    private currentUserService: CurrentUserService,
    private router: Router,
  private postService: PostService) { }

  user$: Observable<IUser>;

  ngOnInit() {
    this.user$ = this.currentUserService.get()
      .do((curUser: IUser) => {
        if (!curUser) {
          this.router.navigate(['']);
        }
      });
  }

  savePost(post: IPost) {
    this.postService.postPost(post)
    .subscribe(postedPost => {
      console.log('Post id:' + postedPost.id + ' was successfully posted on json-server');
      this.router.navigate(['posts', postedPost.id]);
    });
  }
}
