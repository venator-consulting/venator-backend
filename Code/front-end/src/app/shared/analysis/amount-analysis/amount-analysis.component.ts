import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amount-analysis',
  templateUrl: './amount-analysis.component.html',
  styleUrls: ['./amount-analysis.component.sass']
})
export class AmountAnalysisComponent implements OnInit {

  basicData: any ; 
  basicOptions: any ; 
  cols = [
    {header:"Creditorname", field: ""},
    {header:"Documentnumber", field: ""},
    {header:"bookingsdate", field: ""},
    {header:"Amount", field: ""},
    {header:"Reference", field: ""},
    {header:"Headertext", field: ""},
    {header:"text", field: ""},
    {header:"Reason", field: ""},
    {header:"Details", field: ""},

  ];
  postings =[]
  constructor() {
    this.basicData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'My First dataset',
              backgroundColor: '#42A5F5',
              data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
              label: 'My Second dataset',
              backgroundColor: '#FFA726',
              data: [28, 48, 40, 19, 86, 27, 90]
          }
      ]
  };

}

  ngOnInit(): void {


  }

}
