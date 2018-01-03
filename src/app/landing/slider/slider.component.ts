import { Component, OnInit } from '@angular/core';
// import { setInterval } from 'timers';

@Component({
  selector: 'blog-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  checkedIndex = 0;

  // firstChecked = true;
  // secondChecked = false;
  // thirdChecked = false;

  ngOnInit() {
    // setInterval(() => {
    //   if (this.firstChecked) {
    //     this.firstChecked = false;
    //     this.secondChecked = true;
    //   } else if (this.secondChecked) {
    //     this.firstChecked = false;
    //     this.secondChecked = false;
    //     this.thirdChecked = true;
    //   } else if (this.thirdChecked) {
    //     this.firstChecked = true;
    //     this.secondChecked = false;
    //     this.thirdChecked = false;
    //   }
    // }, 3000);
    setInterval(() => this.nextSlide(), 3000);
  }

  nextSlide() {
    this.checkedIndex = (this.checkedIndex + 1) % 3 ;
  }
}

