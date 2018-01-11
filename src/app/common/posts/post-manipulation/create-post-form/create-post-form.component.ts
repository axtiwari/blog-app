import { Component, OnInit, Input, ViewChild, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { IPost } from '../../../interfaces/post';
import { MediumEditorComponent } from './medium-editor/medium-editor.component';
import { HashtagParserService } from '../../../services/hashtag-parser.service';
import { IUser } from '../../../interfaces/user';

@Component({
  selector: 'blog-create-post-form',
  templateUrl: './create-post-form.component.html',
  styleUrls: ['./create-post-form.component.css']
})
export class CreatePostFormComponent implements OnInit, AfterViewInit {

  @Input() user: IUser;
  @Input() post: IPost;
  @ViewChild('mediumEditor') postDescription: MediumEditorComponent;
  @Output() save: EventEmitter<IPost> = new EventEmitter;

  constructor(private hashtagParserService: HashtagParserService) { }

  title: string;
  hashtags: string;

  ngOnInit() {
    if (this.post) {
      this.title = this.post.topic;
      this.hashtags = this.hashtagParserService.getStringOfHashtags(this.post.hashtags);
    }
  }

  ngAfterViewInit(): void {
    if (this.post) {
      this.postDescription.setContent(this.post.descriptionHtml);
    }
  }

  private createPost(formValue: any): IPost {
    return {
      userId: this.user.id,
      topic: formValue.title,
      date: new Date().toISOString(),
      descriptionHtml: this.postDescription.getContent(),
      hashtags: this.hashtagParserService.getHashtags(formValue.hashtags)
    };
  }

  savePost(formValue) {
    this.save.emit(this.createPost(formValue));
  }
}
