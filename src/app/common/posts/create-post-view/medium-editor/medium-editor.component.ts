import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as MediumEditor from 'medium-editor';

@Component({
  selector: 'blog-medium-editor',
  templateUrl: './medium-editor.component.html',
  styleUrls: ['./medium-editor.component.css']
})
export class MediumEditorComponent implements OnInit, AfterViewInit {

  medium: MediumEditor;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.medium = new MediumEditor('.editor');
    this.medium.setContent('<h2>MediumEditor</h2>'); // add existing HTML into it.
    console.log(this.medium.getContent(0));
  }

}
