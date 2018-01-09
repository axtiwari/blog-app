import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CurrentUserService } from '../services/current-user.service';
import { IUser } from '../interfaces/user';

@Injectable()

export class AuthenticationGuard implements CanActivate {

    constructor(
        private currentUserService: CurrentUserService,
        private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.currentUserService.get()
        .map((curUser: IUser) => !!curUser)
        .do((result: boolean) => {
            if (result) {
                console.log('You have access. Router activated.');
            } else {
                this.router.navigate(['']);
            }
        });
    }
}
