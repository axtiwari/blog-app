import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IComment } from '../../interfaces/comment';

@Component({
  selector: 'blog-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor() { }

  @Input() comment: IComment;
  @Input() showDeleteButton: boolean;
  @Output() deleteComment: EventEmitter<number> = new EventEmitter;

  ngOnInit() {
  }

  deleteClicked() {
    this.deleteComment.emit(this.comment.id);
  }

}
