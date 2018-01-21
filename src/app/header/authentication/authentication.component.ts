import { Component, OnInit, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CurrentUserService } from '../../common/services/current-user.service';
import { IUser } from '../../common/interfaces/user';
import { GoogleApiService } from '../../common/services/google-api-service.service';

@Component({
  selector: 'blog-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(
    private currentUserService: CurrentUserService,
    private googleApiService: GoogleApiService,
    private zone: NgZone) { }

  isAccessPopupVisible = false;
  isUserMenuVisible = false;

  user: IUser; // initial value of user - null

  ngOnInit() {
    this.currentUserService.get().subscribe((user: IUser) => {
      console.log(user);
      // Workaround for not updated on the component view https://github.com/angular/angular/issues/19334
      this.zone.run(() => this.user = user);
    }
    );
  }

  showPopUp(): void {
    this.isAccessPopupVisible = true;
  }

  hidePopUp(): void {
    this.isAccessPopupVisible = false;
  }
  signOut(): void {
    this.googleApiService.signOut().then(() => {
      // Workaround for not updated https://github.com/angular/angular/issues/19334
      this.zone.run(() => this.currentUserService.signOut());
      console.log('User signed out.');
    });
  }

  showUserMenu(): void {
    this.isUserMenuVisible = !this.isUserMenuVisible;
  }

  onClickedOutside(e: Event) {
    this.isUserMenuVisible = false;
  }
}
