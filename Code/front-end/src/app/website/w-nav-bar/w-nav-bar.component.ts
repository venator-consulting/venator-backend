import { Component, OnInit, Output, EventEmitter, HostListener, ViewChild, ElementRef } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-w-nav-bar',
  templateUrl: './w-nav-bar.component.html',
  styleUrls: ['./w-nav-bar.component.sass']
})
export class WNavBarComponent implements OnInit {

  @Output() Navigate = new EventEmitter();
  @ViewChild('header') header: ElementRef;

  constructor() { }

  @HostListener('window:scroll', ['$event'])
  scrollEvent(event) {
    if (window.pageYOffset > window.innerHeight) {
      // console.log("Scroll Event", window.pageYOffset);
      this.header.nativeElement.classList.add('sticky-header');
      this.header.nativeElement.classList.remove('sticky-header-shrink');
    }

    if (window.pageYOffset < window.innerHeight) {
      // console.log("Scroll Event", window.pageYOffset);
      this.header.nativeElement.classList.remove('sticky-header');
      this.header.nativeElement.classList.remove('sticky-header-shrink');
    }
  }

  ngOnInit(): void { }

  navigateTo(element: string) {
    this.Navigate.emit(element)
  }

}
