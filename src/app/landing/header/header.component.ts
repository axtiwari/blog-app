import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blog-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  isMenuVisible = false;
  isSearchVisible = false;

  ngOnInit() {
  }

  showMenu() {
    if (this.isSearchVisible) {
      this.showSearch();
    }
    this.isMenuVisible = !this.isMenuVisible;
  }

  showSearch() {
    if ( this.isMenuVisible) {
      this.showMenu();
    }
    this.isSearchVisible = !this.isSearchVisible;
  }
}
