import { Component, OnInit, Input } from '@angular/core';
import { IPost } from '../post';

@Component({
  selector: 'blog-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }
  @Input() postData: IPost;

  ngOnInit() {
  }
}
