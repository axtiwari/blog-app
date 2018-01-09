import { Component, OnInit} from '@angular/core';
import { IUser } from '../../interfaces/user';
import { Observable } from 'rxjs/Observable';
import { CurrentUserService } from '../../services/current-user.service';
import * as MediumEditor from 'medium-editor';
import { AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'blog-create-post-view',
  templateUrl: './create-post-view.component.html',
  styleUrls: ['./create-post-view.component.css']
})
export class CreatePostViewComponent implements OnInit, AfterViewInit {

  constructor(private currentUserService: CurrentUserService,
  private router: Router) { }

  user$: Observable<IUser>;
  medium: MediumEditor;

  ngOnInit() {
    this.user$ = this.currentUserService.get()
    .do((curUser: IUser) => {
      if (!curUser) {
        this.router.navigate(['']);
      }
    });
  }

  ngAfterViewInit() {
    this.medium = new MediumEditor('.editor');
    // If you wish to add existing HTML into it, you can do it like this.
    this.medium
      .setContent('<h2>MediumEditor<h2>');
  }
}
