import { Component, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../../../common/services/user.service';
import { CurrentUserService } from '../../../../common/services/current-user.service';
import { IUser } from '../../../../common/interfaces/user';
import { GoogleApiService } from '../../../../common/services/google-api-service.service';
@Component({
  selector: 'blog-google-sign-in-button',
  templateUrl: './google-sign-in-button.component.html',
  styleUrls: ['./google-sign-in-button.component.css']
})
export class GoogleSignInButtonComponent implements OnInit, AfterViewInit {

  constructor(
    private userService: UserService,
    private currentUserService: CurrentUserService,
    private googleApiService: GoogleApiService
  ) { }

  @Output() error: EventEmitter<string> = new EventEmitter();
  @Output() success: EventEmitter<any> = new EventEmitter();
  user: IUser;

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.googleApiService.renderSignInButton('google-btn')
    .subscribe(
      (googleUser) => {
        this.onSignIn(googleUser);
        this.success.emit();
      },
      (error) => this.error.emit(error.error)
    );
  }

  onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    this.userService.getUserByGoogleId(profile.getId()).subscribe((user: IUser) => {
      if (user) {
        this.user = user;
      } else {
       this.userService.postUser(this.createUserByGoogleProfile(profile)).subscribe((newUser: IUser) => this.user = newUser);
      }
      this.currentUserService.set(user);
    });
  }

  private createUserByGoogleProfile(googleProfile: any): IUser {
    return {
      name: googleProfile.getName(),
      avatarImageUrl: googleProfile.getImageUrl(),
      googleId: googleProfile.getId()
    };
  }
}
