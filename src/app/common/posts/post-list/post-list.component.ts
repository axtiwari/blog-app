import { Component, OnInit, Input } from '@angular/core';
import { IPost } from '../../interfaces/post';

@Component({
  selector: 'blog-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor() { }

  @Input() posts: IPost[];

  @Input() showMore = false;

  @Input() showTotalCount = false;

  @Input() total: number;

  @Input() userId: number;

  ngOnInit() {
  }

}
