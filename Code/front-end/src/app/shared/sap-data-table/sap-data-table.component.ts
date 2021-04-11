import { Component, OnInit } from '@angular/core';
import {PostingDataService} from  '../service/posting-data.service';

@Component({
  selector: 'app-sap-data-table',
  templateUrl: './sap-data-table.component.html',
  styleUrls: ['./sap-data-table.component.sass']
})
export class SAPDataTableComponent implements OnInit {

  constructor(private _postingDataService: PostingDataService) {}

 
  companyCode = "D101"
  

  data : any;
  postings = [];
  ex = ""

  ngOnInit(): void {
    
    this._postingDataService
    .getDataTable(this.companyCode)
    .subscribe(
      (data) => { 
        this.data = data ;
         this.postings = this.data.data ; 
         this.ex = this.postings[0].recordNumber;
         console.log(this.postings.length)
        },
      (error) => console.log(error),
      () => {  }
    );
  }

}
