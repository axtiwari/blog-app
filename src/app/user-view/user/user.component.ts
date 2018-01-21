import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../../common/services/user.service';
import { IUser } from '../../common/interfaces/user';

@Component({
  selector: 'blog-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnChanges {

  constructor(private userService: UserService) { }
  @Input() id: number;

  user$: Observable<IUser>;
  postsCount: number;
  commentsCount: number;

  ngOnInit() {
  }

  ngOnChanges(): void {
    this.user$ = this.userService.getUser(this.id)
    .do((user: IUser) => {
      this.postsCount = user.posts.length;
      this.commentsCount = user.comments.length;
    });
  }

}
