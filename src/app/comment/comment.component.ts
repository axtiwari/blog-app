import { Component, OnInit, Input } from '@angular/core';
import { IComment } from '../posts/comment';
import { IUser } from '../posts/user';

@Component({
  selector: 'blog-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor() { }

  @Input() comment: IComment;

  ngOnInit() {
  }

}
