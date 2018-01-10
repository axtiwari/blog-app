import { Component, OnInit, Input,  ViewChild, Output, EventEmitter } from '@angular/core';
import { IPost } from '../../../interfaces/post';
import { PostService } from '../../../services/posts.service';

@Component({
  selector: 'blog-create-post-form',
  templateUrl: './create-post-form.component.html',
  styleUrls: ['./create-post-form.component.css']
})
export class CreatePostFormComponent implements OnInit {

  @Input() userId: number;
  @ViewChild('mediumEditor') postDescription;
  @Output() postCreated: EventEmitter<IPost> = new EventEmitter;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  private createPost(userId: number, formValue: any, postdescriptiom: any): IPost {
    return {
      userId: this.userId,
      topic: formValue.title,
      date: new Date().toISOString(),
      descriptionHtml: this.postDescription.medium.getContent(0),
      hashtags: [formValue.hashtags]
  };
  }

  savePost(formValue) {
    console.log(formValue);
    this.postService
    .postPost(this.createPost(this.userId, formValue, this.postDescription))
    .subscribe((post) => this.postCreated.emit(post));
  }
}
