import { Component, OnInit } from '@angular/core';
import { IUser } from '../../interfaces/user';
import { Observable } from 'rxjs/Observable';
import { CurrentUserService } from '../../services/current-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'blog-create-post-view',
  templateUrl: './create-post-view.component.html',
  styleUrls: ['./create-post-view.component.css']
})
export class CreatePostViewComponent implements OnInit {

  constructor(
    private currentUserService: CurrentUserService,
    private router: Router) { }

  user$: Observable<IUser>;

  ngOnInit() {
    this.user$ = this.currentUserService.get()
      .do((curUser: IUser) => {
        if (!curUser) {
          this.router.navigate(['']);
        }
      });
  }
}
