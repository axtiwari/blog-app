import { Component, OnInit, Output, EventEmitter, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'blog-access-view',
  templateUrl: './access-view.component.html',
  styleUrls: ['./access-view.component.css']
})
export class AccessViewComponent implements OnInit {

  constructor() { }
  @Output() close = new EventEmitter();

  ngOnInit() {
  }

  closePopUp(): void {
    this.close.emit();
  }
}
