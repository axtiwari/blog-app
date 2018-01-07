import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IPost } from '../../interfaces/post';

@Component({
  selector: 'blog-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor( private router: Router) { }
  @Input() postData: IPost;

  ngOnInit() {
  }

  search(keyword: string): void {
    this.router.navigate(['posts'], { queryParams: { q: keyword } });
  }
}