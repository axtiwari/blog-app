import { Component, OnInit, AfterViewInit, EventEmitter, Output } from '@angular/core';
import * as MediumEditor from 'medium-editor';
@Component({
  selector: 'blog-medium-editor',
  templateUrl: './medium-editor.component.html',
  styleUrls: ['./medium-editor.component.css']
})
export class MediumEditorComponent implements OnInit, AfterViewInit {
  private medium: MediumEditor;
  @Output() edit: EventEmitter<boolean> = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.medium = new MediumEditor('.editor', {
      placeholder: { // options for placeholder
        text: '',
        hideOnClick: true
      },
      toolbar: {
        buttons: ['bold', 'italic', 'underline', 'anchor', 'h2',
          'h3', 'quote', 'justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'orderedlist', 'unorderedlist']
      }
    });
  }

  getContent(): string {
    return this.medium.getContent(0);
  }

  setContent(content: string): void {
    this.medium.setContent(content);
  }

  editorInFocus() {
    this.edit.emit(true);
  }

  editorOutOfFocus() {
    this.edit.emit(false);
  }
}
