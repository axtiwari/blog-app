import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PostService } from '../../posts/posts.service';
import { IPost } from '../../posts/post';
import 'rxjs/add/operator/map';
import { IPostData } from '../../posts/postData';

@Component({
  selector: 'blog-blogs-view-section',
  templateUrl: './blogs-view-section.component.html',
  styleUrls: ['./blogs-view-section.component.css']
})

export class BlogsViewSectionComponent implements OnInit {

  constructor(private postService: PostService) { }

  posts$: Observable<IPost[]>;

  ngOnInit() {
    this.posts$ = this.postService.getPosts(1, 10).map((postData: IPostData) => postData.result);
  }

}
