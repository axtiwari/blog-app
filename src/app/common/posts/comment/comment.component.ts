import { Component, OnInit, Input } from '@angular/core';
import { IComment } from '../../interfaces/comment';

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
