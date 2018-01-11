import { Component, OnInit, Input,  ViewChild, Output, EventEmitter } from '@angular/core';
import { IPost } from '../../../interfaces/post';
import { MediumEditorComponent } from './medium-editor/medium-editor.component';
import { HashtagParserService } from '../../../services/hashtag-parser.service';
import { IUser } from '../../../interfaces/user';

@Component({
  selector: 'blog-create-post-form',
  templateUrl: './create-post-form.component.html',
  styleUrls: ['./create-post-form.component.css']
})
export class CreatePostFormComponent implements OnInit {

  @Input() user: IUser;
  @ViewChild('mediumEditor') postDescription: MediumEditorComponent;
  @Output() save: EventEmitter<IPost> = new EventEmitter;

  constructor(private hashtagParserService: HashtagParserService) { }

  ngOnInit() {
  }

  private createPost(userId: number, formValue: any, postdescriptiom: any): IPost {
    return {
      userId: this.user.id,
      topic: formValue.title,
      date: new Date().toISOString(),
      descriptionHtml: this.postDescription.getContent(),
      hashtags: this.hashtagParserService.getHashtags(formValue.hashtags)
  };
  }

  savePost(formValue) {
    this.save.emit(this.createPost(this.user.id, formValue, this.postDescription));
  }
}
