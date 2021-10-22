import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-w-nav-bar',
  templateUrl: './w-nav-bar.component.html',
  styleUrls: ['./w-nav-bar.component.sass']
})
export class WNavBarComponent implements OnInit {

  @Output() Navigate = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  navigateTo(element: string) {
    this.Navigate.emit(element)
  }

}
