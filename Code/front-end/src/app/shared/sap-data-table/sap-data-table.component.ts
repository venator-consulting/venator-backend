import { Component, OnInit } from '@angular/core';
import { PostingDataService } from  '../service/posting-data.service';
import { DataFilterService } from  '../service/data-filter.service';
import { dataTableColumns } from "../../model/dataTableColumns";

@Component({
  selector: 'app-sap-data-table',
  templateUrl: './sap-data-table.component.html',
  styleUrls: ['./sap-data-table.component.sass']
})
export class SAPDataTableComponent implements OnInit {

  constructor(private _postingDataService: PostingDataService, private _dataFilterService: DataFilterService) {}

  filterClearShow :boolean = false;
  loading: boolean = false ;
  selectLastPage: boolean = false ;
  
  companyCode :string = "D101";         // then will be procedureID
  filterValue1 :string = "";
  filterField1 :string = "";
  filterValue2 :string = "";
  filterField2 :string = "";
  filterNr: number = 0;
  pageNr: number = 1 ;
  offset: number = 0;
  data : any;
  postings :[] = [];
  cols: dataTableColumns[] = dataTableColumns.getDataTableColumns();
  firstId: number = 0 ;
  lastId: number = 0;
  startId: number  = 0;
  endId: number = 0;

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this._postingDataService
    .getDataTable(this.companyCode , this.offset)
    .subscribe(
      (data) => { 
        this.data = data ;
        this.postings = this.data.results ; 
        this.loading = false
        this.firstId = this.data.results[0].id
        console.log(this.firstId)
        },
      (error) => console.log(error),
      () => {  }
    );
  }

  filterChange(value, field) {
    if(this.filterNr===0) {
      this.filterClearShow = true
      this.filterValue1 = value
      this.filterField1 = field
    } else if (this.filterNr===1) {
      this.filterValue2 = value
      this.filterField2 = field
    }

    console.log(this.filterValue1, this.filterField1,this.filterNr)
  }
  clearFilter() {
    this.filterValue1 = "";
    this.filterField1  = "";
    this.filterValue2 = "";
    this.filterField2  = "";
    this.offset = 0; 
    this.filterNr = 0;
    this.pageNr = 1 ;
    this.offset = 0;
    this.loading = true
    this.pageNr = 1
    this.selectLastPage = false 
    this.lastId = 0
    this.firstId = 0
    this.startId = 0 
    this.endId = 0 

    this.getData()
  }
  getFirstFilterData() {

    this._dataFilterService
    .getFilteredData(this.filterValue1, this.filterField1, this.offset)
    .subscribe(
      (data) => { 
        this.data = data ;
        this.postings = this.data.results ; 
        this.loading = false

        },
      (error) => console.log(error),
      () => {  }
    );
  }
  getSecondFilterData() {

    this._dataFilterService
    .getSecondFilteredData(this.filterValue1, this.filterField1,this.filterValue2, this.filterField2, this.offset)
    .subscribe(
      (data) => { 
        this.data = data ;
        this.postings = this.data.results ; 
        this.loading = false

        },
      (error) => console.log(error),
      () => {  }
    );
  }
  submitFilter(){
    this.offset = 0;
    this.loading = true
    this.pageNr = 1
    this.selectLastPage = false 
    this.lastId = 0
    this.firstId = 0
    this.startId = 0 
    this.endId = 0 

    if(this.filterNr ===0 &&  this.filterValue1 && this.filterField1 && !this.filterValue2 && !this.filterField2) {
      this.filterNr = 1
      this.getFirstFilterData()
    }
     else if(this.filterNr===1 && this.filterValue1 && this.filterField1 && this.filterValue2 && this.filterField2) {
      this.filterNr = 2
      this.getSecondFilterData()
    }

  }
  firstPage() {
    this.loading = true
    this.pageNr = 1
    this.offset = 0

    if(this.filterNr === 0) {
      this.getData()
    }
    else if (this.filterNr === 1 ) {
      this.getFirstFilterData()
    } 
    else if (this.filterNr === 2 ) {
      this.getSecondFilterData()
    }

  }
  previousPage() {
    this.loading = true
    if(this.pageNr > 1) {
      this.pageNr = this.pageNr-1

      if(!this.selectLastPage) { // if we didn't click last page
        this.offset = this.offset-10
        if(this.filterNr === 0) {
          this.getData()
        }
        else if (this.filterNr === 1 ) {
          this.getFirstFilterData()
        } 
        else if (this.filterNr === 2 ) {
          this.getSecondFilterData()
        }


      } else if(this.selectLastPage) {  // if we coming back from last page
    
        if(this.filterNr === 0) {
          this.endId   = this.endId -10
          this.startId = this.startId -10
          this._postingDataService
          .getLastDataPrevious(this.companyCode , this.startId, this.endId)
          .subscribe(
            (data) => { 
              this.data = data ;
              this.postings = this.data.results ; 
              this.loading = false;

              console.log(this.postings);

              },
            (error) => console.log(error),
            () => {  }
          );
        }
      }

  }

  }
  nextPage() {
    this.loading = true
    this.pageNr = this.pageNr+1 
    this.offset = this.offset+10
    
    if(!this.selectLastPage) { // if we didn't click last page
    if(this.filterNr === 0) {
        this.getData()
      }
      else if (this.filterNr === 1 ) {
        this.getFirstFilterData()
      } 
      else if (this.filterNr === 2 ) {
        this.getSecondFilterData()
      }
  } else if(this.selectLastPage) {


    this.startId = this.startId + 10
    this.endId = this.endId + 10
    this._postingDataService
    .getLastDataPrevious(this.companyCode , this.startId, this.endId)
    .subscribe(
      (data) => { 
        this.data = data ;
        this.postings = this.data.results ; 
        this.loading = false;


        console.log(this.postings)

        },
      (error) => console.log(error),
      () => {  }
    );
  }


  }
  lastPage() {
    if(this.filterNr === 0 ) {
      this._postingDataService
      .getLastDataTable(this.companyCode)
      .subscribe(
        (data) => { 
          this.data = data ;
          this.postings = this.data.results ; 
          this.loading = false
          this.lastId = this.data.results[0].id
          this.pageNr = Math.ceil((this.lastId - this.firstId) / 10)
          this.endId   = this.lastId 
          this.startId = this.endId - 10
          this.selectLastPage = true
          console.log(this.postings)


/*           this.offset = this.lastId -10
          this.pageNr = Math.ceil((this.lastId - this.firstId) / 10)
          console.log(this.lastId)
          console.log(this.firstId)
          console.log(this.pageNr)
          console.log(this.offset) */

          },
        (error) => console.log(error),
        () => {  }
      );
    }
  }
  pageNrChange(value){
    this.pageNr =   value ;
    this.offset = this.pageNr*10-10 ; 
    this.loading = true;
    this.offset = 0;
    this.selectLastPage = false 
    this.lastId = 0
    this.firstId = 0
    this.startId = 0 
    this.endId = 0 
    if(this.filterNr === 0) {
      this.getData()
    }
    else if (this.filterNr === 1 ) {
      this.getFirstFilterData()
    } 
    else if (this.filterNr === 2 ) {
      this.getSecondFilterData()
    }
  }
}
