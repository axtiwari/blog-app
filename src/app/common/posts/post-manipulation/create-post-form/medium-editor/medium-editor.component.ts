import { Component, OnInit, AfterViewInit, EventEmitter, Output } from '@angular/core';
import * as MediumEditor from 'medium-editor';
import { MediumEditorExtensions } from '../../../../services/mediumEditorExtensions.service';

@Component({
  selector: 'blog-medium-editor',
  templateUrl: './medium-editor.component.html',
  styleUrls: ['./medium-editor.component.css']
})
export class MediumEditorComponent implements OnInit, AfterViewInit {
  private medium: MediumEditor;

  @Output() edit: EventEmitter<boolean> = new EventEmitter;

  constructor(private mediumEditorEtensions: MediumEditorExtensions) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.medium = new MediumEditor('.editor', {
      placeholder: { // options for placeholder
        text: '',
        hideOnClick: true
      },
      toolbar: {
        buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3', 'quote', 'orderedlist', 'unorderedlist', 'highlighter']
      },
      extensions: {
        'highlighter': this.mediumEditorEtensions.createHighligterButton()
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
