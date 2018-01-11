import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from '../../../interfaces/user';
import { Observable } from 'rxjs/Observable';
import { CurrentUserService } from '../../../services/current-user.service';
import { IPost } from '../../../interfaces/post';
import { PostService } from '../../../services/posts.service';

@Component({
  selector: 'blog-edit-post-view',
  templateUrl: './edit-post-view.component.html',
  styleUrls: ['./edit-post-view.component.css']
})
export class EditPostViewComponent implements OnInit {

  constructor(private route: ActivatedRoute,
  private currentUserService: CurrentUserService,
private postService: PostService) { }

  currentUser$: Observable<IUser>;
  post$: Observable<IPost>;
  userId: number;

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.post$ = this.postService.getPost(id).do((post: IPost) => this.userId = post.userId);
      this.currentUser$ = this.currentUserService.get();
    }
  }

}
