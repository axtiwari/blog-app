import { Component, OnInit, Output, EventEmitter, Input, AfterViewInit } from '@angular/core';
declare let gapi: any;

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

  signOut() {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }

}
