import { Component, OnInit } from '@angular/core';
import { About, AboutItem } from 'src/app/shared/model/website';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  data: About = new About();
  fields: string[];
  items: AboutItem[] = new Array();

  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this.fields = ['id', 'aboutText', 'aboutImg'];
    this._dataService
      .get(this.fields)
      .subscribe(res => this.data = res);
      this.getItems();
  }

  getItems() {
    this._dataService.getAboutItems().subscribe(res => this.items = res);
  }

}
