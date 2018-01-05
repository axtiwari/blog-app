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
  isAccessPopupVisible = false;

  ngOnInit() {
  }

  showMenu() {
    this.isSearchVisible = false;
    this.isMenuVisible = !this.isMenuVisible;
  }

  showSearch() {
    this.isMenuVisible = false;
    this.isSearchVisible = !this.isSearchVisible;
  }

  searchPosts(keyword: string) {
    this.router.navigate(['posts'], { queryParams: { q: keyword } });
    this.isSearchVisible = false;
  }

  showPopUp(): void {
    this.isAccessPopupVisible = true;
  }

  hidePopUp(): void {
    this.isAccessPopupVisible = false;
  }
}
