import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as MediumEditor from 'medium-editor';
@Component({
  selector: 'blog-medium-editor',
  templateUrl: './medium-editor.component.html',
  styleUrls: ['./medium-editor.component.css']
})
export class MediumEditorComponent implements OnInit, AfterViewInit {
  private medium: MediumEditor;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.medium = new MediumEditor('.editor', {
      placeholder: { // options for placeholder
          text: 'Type your text',
          hideOnClick: true
      },
      toolbar: {
        buttons: ['bold', 'italic', 'underline', 'anchor', 'h2',
         'h3', 'quote', 'justifyLeft', 'justifyCenter' , 'justifyRight', 'justifyFull', 'orderedlist', 'unorderedlist']
      }
  });
   // this.medium.setContent('<h2>MediumEditor</h2>'); // add existing HTML into it.
   // this.medium.getContent(0); //GET CONTENT :)
  }

  getContent(): string {
    return this.medium.getContent(0);
  }

  setContent(content: string): void {
    this.medium.setContent(content);
  }
}
