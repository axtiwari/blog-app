import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'blog-write-comment',
  templateUrl: './write-comment.component.html',
  styleUrls: ['./write-comment.component.css']
})
export class WriteCommentComponent implements OnInit {

  @Output() save: EventEmitter<string> = new EventEmitter;

  constructor() { }
  newComment = '';

  ngOnInit() {
  }

  saveComment(value: string) {
    value = value.trim();
    if (value) {
      this.save.emit(value);
      this.newComment = '';
    }
  }
}
