import { Component, OnInit } from '@angular/core';
import { OurServices, OurServicesItem } from 'src/app/shared/model/website';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.sass']
})
export class WhatWeDoComponent implements OnInit {

  data: OurServices = new OurServices();
  fields: string[];
  items: OurServicesItem[] = new Array();

  constructor(private _dateService: DataService) { }

  ngOnInit(): void {
    this.fields = ['id', 'servicesTitle', 'servicesText'];
    this.getData();
    this.getItems();
  }

  getData() {
    this._dateService.get(this.fields).subscribe(res => { this.data = res; });
  };

  getItems() {
    this._dateService.getOurServiceItems().subscribe(res => this.items = res);
  }
}
