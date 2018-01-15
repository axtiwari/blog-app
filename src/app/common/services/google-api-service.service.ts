import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgZone } from '@angular/core';
declare const gapi: any;

@Injectable()

export class GoogleApiService {

    constructor(private ngZone: NgZone) { }

    signOut(): Promise<{}> {
        const auth2 = gapi.auth2.getAuthInstance();
        return auth2.signOut(); // return promise
    }

    renderSignInButton(id: string): Observable<any> {

        return new Observable((observer) => {
            gapi.signin2.render(id, {
                'scope': 'profile',
                'width': 240,
                'height': 50,
                'longtitle': true,
                'theme': 'light',
                'onsuccess': (googleUser) =>  // call onSign in method in google-sign-in-button.component
                    // Workaround for not updated on the component view https://github.com/angular/angular/issues/19334:
                    this.ngZone.run(() => observer.next(googleUser)),
                'onfailure': (error) => console.log(error)
            });
        });
    }
}
