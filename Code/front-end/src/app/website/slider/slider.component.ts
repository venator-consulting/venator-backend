import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Slider } from 'src/app/shared/model/website';
import { DataService } from '../service/data.service';

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
  data: Slider = new Slider();
  fields: string[];

  constructor(private _dateService: DataService) { }

  ngOnInit(): void {
    this.fields = ['id', 'sliderImg1', 'sliderImg2', 'sliderImg3', 'sliderTitle1', 'sliderTitle2', 'sliderTitle3', 'sliderSubTitle1', 'sliderSubTitle2', 'sliderSubTitle3'];
    this.getData();
  }

  getData() {
    this._dateService
    .get(this.fields)
    .subscribe(res=> {
      this.data = res;
    })
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
