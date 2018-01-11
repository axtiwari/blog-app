import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from '../../../interfaces/user';
import { Observable } from 'rxjs/Observable';
import { CurrentUserService } from '../../../services/current-user.service';
import { IPost } from '../../../interfaces/post';
import { PostService } from '../../../services/posts.service';
import { Router } from '@angular/router';
import 'rxjs/add/observable/combineLatest';

@Component({
  selector: 'blog-edit-post-view',
  templateUrl: './edit-post-view.component.html',
  styleUrls: ['./edit-post-view.component.css']
})
export class EditPostViewComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private currentUserService: CurrentUserService,
    private postService: PostService,
    private router: Router) { }

  user: IUser;
  post: IPost;

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (!param) {
      this.router.navigate(['']);
    }
    const post$ = this.postService.getPost(+param);
    const currentUser$ = this.currentUserService.get();

    Observable.combineLatest(currentUser$, post$).subscribe(([curUser, post]) => {
      if (curUser.id !== post.userId) {
        this.router.navigate(['']);
      }
      this.user = curUser;
      this.post = post;
    });
  }

  updatePost(post: IPost) {
    post.id = this.post.id;
    post.date = this.post.date;
    this.postService.editPost(post)
    .subscribe(postedPost => {
      console.log('Post id:' + postedPost.id + ' was edited and was successfully posted on json-server');
      this.router.navigate(['posts', postedPost.id]);
    });
  }
}
