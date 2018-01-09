import { Component, OnInit, NgZone} from '@angular/core';
import { IUser } from '../../interfaces/user';
import { Observable } from 'rxjs/Observable';
import { CurrentUserService } from '../../services/current-user.service';

@Component({
  selector: 'blog-create-post-view',
  templateUrl: './create-post-view.component.html',
  styleUrls: ['./create-post-view.component.css']
})
export class CreatePostViewComponent implements OnInit {

  constructor(private currentUserService: CurrentUserService,
    private zone: NgZone) { }

  user: IUser;

  ngOnInit() {
   this.currentUserService.get().subscribe((user: IUser) => {
      console.log(user);
      // Workaround for not updated on the component view https://github.com/angular/angular/issues/19334:
      this.zone.run(() => this.user = user);
    }
    );
  }
}
