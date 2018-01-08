import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'blog-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  @Output() signOut = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  signOutOnClick(): void {
    this.signOut.emit();
  }

}
