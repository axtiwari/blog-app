import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'blog-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }


  isMenuVisible = false;
  isSearchVisible = false;


  ngOnInit() {}

  showMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  showSearch() {
    this.isSearchVisible = !this.isSearchVisible;
  }

  searchPosts(keyword: string) {
    this.router.navigate(['posts'], { queryParams: { q: keyword } });
    this.isSearchVisible = false;
  }

  onClickedOutsideCloseNav(e: Event) {
    this.isMenuVisible = false;
  }

  onClickedOutsideCloseSearch(e: Event) {
    this.isSearchVisible = false;
  }
}
