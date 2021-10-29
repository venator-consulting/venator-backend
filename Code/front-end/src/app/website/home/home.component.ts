import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  @ViewChild('services', { static: false }) services;
  @ViewChild('about', { static: false }) about;
  @ViewChild('contact', { static: false }) contact;


  constructor() { }

  ngOnInit(): void {
  }

  navigateTo(element: string) {
    this[element].nativeElement.scrollIntoView({ behavior: "smooth" });
  }

}
