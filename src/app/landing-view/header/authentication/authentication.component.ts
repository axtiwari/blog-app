import { Component, OnInit, NgZone } from '@angular/core';
import { CurrentUserService } from '../../../common/services/current-user.service';
import { IUser } from '../../../common/interfaces/user';
import { Observable } from 'rxjs/Observable';
declare const gapi: any;

@Component({
  selector: 'blog-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(private currentUserService: CurrentUserService,
  private zone: NgZone) { }

  isAccessPopupVisible = false;

  user: IUser; // initial value of user - null

  ngOnInit() {
    this.currentUserService.get().subscribe((user: IUser) => {
      console.log(user);
       // Workaround for not updated on the component view https://github.com/angular/angular/issues/19334:
      this.zone.run(() =>  this.user = user);
    }
    );
  }

  showPopUp(): void {
    this.isAccessPopupVisible = true;
  }

  hidePopUp(): void {
    this.isAccessPopupVisible = false;
  }


  signOut() {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      this.currentUserService.signOut();
      console.log('User signed out.');
    });
  }

}
