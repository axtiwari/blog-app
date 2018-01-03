import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/do';
import { Injectable } from '@angular/core';
import { IUser } from './user';

@Injectable()
export class UserService {
    private usersUrl = 'http://localhost:3000/users';
    constructor(private http: HttpClient) { }
    getUser(id: number): Observable<IUser> {
        return this.http.get<IUser>(`${this.usersUrl}/${id}`)
        .do(data => console.log(`got user: ${data.name} from server`));
    }
}
