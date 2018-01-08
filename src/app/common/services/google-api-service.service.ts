import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
declare const gapi: any;

@Injectable()

export class GoogleApiService {
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
                'onsuccess': (googleUser) => observer.next(googleUser)     // call onSign in method in google-sign-in-button.component
              });
        });
    }
}
