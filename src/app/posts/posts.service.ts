import { IPost } from './post';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/do';
import { Injectable } from '@angular/core';

@Injectable()
export class PostService {
    private postsUrl = 'http://localhost:3000/posts';
    constructor(private http: HttpClient) { }
    getPosts(page: number, limit: number, userId?: number, searchQuery?: string): Observable<IPost[]> {
        return this.http.get<IPost[]>(this.createPostsUrl(this.postsUrl, page, limit, userId, searchQuery))
            .do(data => console.log(`got ${data.length} posts from server`));
    }

    getPost(id: number): Observable<IPost> {
         return this.http.get<IPost>(`${this.postsUrl}/${id}?_expand=user&_embed=comments`)
         .do(data => console.log(`got post with id: ${id} from server`));
    }

    private createPostsUrl(postsUrls: string, page: number, limit: number, userId?: number, searchQuery?: string): string {
        const query = searchQuery ? `&q=${searchQuery}` : '';
        const userIdSegment = userId ? `userId=${userId}&` : '';
        return `${this.postsUrl}?${userIdSegment}_page=${page}&_limit=${limit}&_sort=date&_order=desc&_expand=user${query}`;
    }
}
