import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/do';
import { Injectable } from '@angular/core';
import { IComment } from './comment';

@Injectable()

export class CommentsService {
    private commentsUrl = 'http://localhost:3000/comments';
    constructor(private http: HttpClient) { }
    getComments(postId: number): Observable<IComment[]> {
        return this.http.get<IComment[]>(`${this.commentsUrl}?postId=${postId}&_expand=user`)
        .do(data => console.log(`got ${data.length} comments from server`));
    }
}
