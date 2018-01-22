import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blog-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  checkedIndex = 0;

  ngOnInit() {
    setInterval(() => this.nextSlide(), 3000);
  }

  nextSlide() {
    this.checkedIndex = (this.checkedIndex + 1) % 3 ;
  }
}

