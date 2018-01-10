import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user';

@Injectable()
export class UserService {
    private usersUrl = 'http://localhost:3000/users';
    constructor(private http: HttpClient) { }

    getUser(id: number): Observable<IUser> {
        return this.http.get<IUser>(`${this.usersUrl}/${id}`)
        .do((data) => this.writeMessage(data));
    }

    // get user by google id. If not found - undefined
    getUserByGoogleId(googleId: string) {
        return this.http.get<IUser[]>(`${this.usersUrl}?googleId=${googleId}`)
        .map((users: IUser[]) => users[0])
        .do((data) => this.writeMessage(data));
    }

    postUser(user: IUser): Observable<IUser> {
        return this.http.post<IUser>(this.usersUrl, user);
    }

    private writeMessage(user: IUser) {
        console.log(user ? `got user: ${user.name} from server` : 'user not found :(');
    }
}
