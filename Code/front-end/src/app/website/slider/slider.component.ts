import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.sass']
})
export class SliderComponent implements OnInit {

  @Output() Navigate = new EventEmitter();
  @ViewChild('slider1') slider1;
  @ViewChild('slider2') slider2;
  @ViewChild('slider3') slider3;
  slideNo: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  navigateTo(element: string) {
    this.Navigate.emit(element)
  }

  slideLeft() {
    this.slideNo--;
    if(this.slideNo < 1) this.slideNo = 3;
  }

  slideRight() {
    this.slideNo++;
    if(this.slideNo > 3) this.slideNo = 1;
  }


}
