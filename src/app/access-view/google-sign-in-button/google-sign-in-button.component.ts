import { Component, OnInit, AfterViewInit } from '@angular/core';
declare const gapi: any;

@Component({
  selector: 'blog-google-sign-in-button',
  templateUrl: './google-sign-in-button.component.html',
  styleUrls: ['./google-sign-in-button.component.css']
})
export class GoogleSignInButtonComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    gapi.signin2.render('google-btn', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'light',
      'onsuccess': param => this.onSignIn(param)
    });
  }

  onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    console.log(profile.getName());
    console.log(profile.getImageUrl());

    // ((u, p) => {
    //     u.id            = p.getId();
    //     u.name          = p.getName();
    //     u.email         = p.getEmail();
    //     u.imageUrl      = p.getImageUrl();
    //     u.givenName     = p.getGivenName();
    //     u.familyName    = p.getFamilyName();
    // })(user, googleUser.getBasicProfile());

    // ((u, r) => {
    //     u.token         = r.id_token
    // })(user, googleUser.getAuthResponse());

    // user.save();
    // this.goHome();
    // };
  }

}
