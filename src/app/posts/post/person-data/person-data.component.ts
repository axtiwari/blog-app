import { Component, OnInit, Input } from '@angular/core';
import { IUser } from '../../user';

@Component({
  selector: 'blog-person-data',
  templateUrl: './person-data.component.html',
  styleUrls: ['./person-data.component.css']
})
export class PersonDataComponent implements OnInit {

  constructor() { }
  @Input() user: IUser;

  ngOnInit() {
  }

}
