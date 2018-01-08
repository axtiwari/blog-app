import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CurrentUserService {

  constructor() { }

  private subject = new BehaviorSubject<IUser>(null);

  set(user: IUser) {
    this.subject.next(user);
  }

  get(): Observable<IUser> {
    return this.subject;
  }

  signOut() {
    this.subject.next(null);
  }
}
