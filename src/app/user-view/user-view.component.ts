import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'blog-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  id$: Observable<number>;

  ngOnInit() {
    this.id$ = this.route.params.map(params => +params['id']);
  }

}
