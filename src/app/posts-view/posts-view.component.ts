import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'blog-posts-view',
  templateUrl: './posts-view.component.html',
  styleUrls: ['./posts-view.component.css']
})
export class PostsViewComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  searchQuery$: Observable<string>;

  ngOnInit() {
    this.searchQuery$ = this.route
    .queryParams.map((params) => params.q);
  }

}
