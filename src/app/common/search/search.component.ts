import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'blog-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  constructor() { }

  @Output() search: EventEmitter<string> = new EventEmitter;

  ngOnInit() {
  }

  onSearch(keyword: string): void {
    this.search.emit(keyword);
    }
}
