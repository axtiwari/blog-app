import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { IPost } from '../interfaces/post';
import { IPostData } from '../interfaces/postData';

@Injectable()
export class PostService {
    private postsUrl = 'http://localhost:3000/posts';
    constructor(private http: HttpClient) { }

    getPosts(page: number, limit: number, userId?: number, searchQuery?: string): Observable<IPostData> {
        return this.http.get<IPost[]>(this.createPostsUrl(this.postsUrl, page, limit, userId, searchQuery), { observe: 'response' })
        .map((res) => {
            return {result: res.body, total: +res.headers.get('X-Total-Count')};
          })
            .do(data => console.log(`got ${data.result.length} posts from server`));
    }

    getPost(id: number): Observable<IPost> {
         return this.http.get<IPost>(`${this.postsUrl}/${id}?_expand=user`)
         .do(data => console.log(`got post with id: ${id} from server`));
    }

    private createPostsUrl(postsUrls: string, page: number, limit: number, userId?: number, searchQuery?: string): string {
        const query = searchQuery ? `&q=${searchQuery}` : '';
        const userIdSegment = userId ? `userId=${userId}&` : '';
        return `${this.postsUrl}?${userIdSegment}_page=${page}&_limit=${limit}&_sort=date&_order=desc&_expand=user${query}`;
    }

    postPost(newPost: IPost): Observable<IPost> {
        console.log(`posted your post: ${newPost} on server`);
        return this.http.post<IPost>(this.postsUrl, newPost);
    }

    editPost(post: IPost): Observable<IPost> {
        console.log(`edit your post: ${post} on server`);
        return this.http.put<IPost>(this.postsUrl + '/' + post.id, post);
    }

    deletePost(postId: number) {
        console.log(`delete your post: ${postId} from server`);
        return this.http.delete(this.postsUrl + '/' + postId);
    }
}
