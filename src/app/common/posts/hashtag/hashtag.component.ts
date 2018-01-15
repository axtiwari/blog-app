import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'blog-hashtag',
  templateUrl: './hashtag.component.html',
  styleUrls: ['./hashtag.component.css']
})
export class HashtagComponent implements OnInit {

  constructor() { }

  @Input() hashtag: string;

  ngOnInit() {
  }

}
