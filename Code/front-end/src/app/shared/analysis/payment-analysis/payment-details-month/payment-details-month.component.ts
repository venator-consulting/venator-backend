import { Component, Input, OnInit } from '@angular/core';
import { TableColumn } from 'src/app/shared/model/tableColumn';

@Component({
  selector: 'app-payment-details-month',
  templateUrl: './payment-details-month.component.html',
  styleUrls: ['./payment-details-month.component.sass']
})
export class PaymentDetailsMonthComponent implements OnInit {

  @Input('blue') blueData: any[];
  @Input('red') redData: any[];
  @Input('green') greenData: any[];
  @Input('month') month: string; // like: '9-2019'
  startDate: Date;
  endDate: Date;
  filteredBlue: any[];
  filteredRed: any[];
  filteredGreen: any[];
  paymentOptions: { name: string; value: number; color: string }[];
  cols: TableColumn[];
  displayData = 1;

  constructor() { }

  ngOnInit(): void {
    if (this.month)
      this.updateData(this.month);

    this.paymentOptions = [
      { name: 'blue', value: 1, color: 'blue !important' },
      { name: 'red', value: 2, color: 'red' },
      { name: 'green', value: 3, color: 'green' },
    ];

    this.cols = [
      {
        header: 'DataTableColumns.accountNumber',
        field: 'accountNumber',
        align: 'left',
      },
      {
        header: 'DataTableColumns.accountName',
        field: 'accountName',
        align: 'left',
      },
      {
        header: 'DataTableColumns.accountType',
        field: 'accountType',
        align: 'center',
      },
      {
        header: 'DataTableColumns.documentType',
        field: 'documentType',
        align: 'center',
      },
      {
        header: 'DataTableColumns.balance',
        field: 'balance',
        align: 'right',
      },
      {
        header: 'DataTableColumns.contraAccountNumber',
        field: 'contraAccountNumber',
        align: 'left',
      },
      {
        header: 'DataTableColumns.contraAccountName',
        field: 'contraAccountName',
        align: 'left',
      },
      {
        header: 'DataTableColumns.documentNumber',
        field: 'documentNumber',
        align: 'left',
      },
      {
        header: 'DataTableColumns.documentDate',
        field: 'documentDate',
        align: 'center',
      },
      {
        header: 'DataTableColumns.applicationDate',
        field: 'applicationDate',
        align: 'center',
      },
      {
        header: 'DataTableColumns.dueDate',
        field: 'dueDate',
        align: 'center',
      },
      {
        header: 'DataTableColumns.textPosting',
        field: 'textPosting',
        align: 'left',
      },
      {
        header: 'DataTableColumns.textHeader',
        field: 'textHeader',
        align: 'left',
      },
      {
        header: 'DataTableColumns.reference',
        field: 'reference',
        align: 'left',
      },
      {
        header: 'DataTableColumns.assignment',
        field: 'assignment',
        align: 'left',
      },
    ];
  } // end of ng on init

  updateData(date: string) {
    let startTemp = date.split('-');
    this.startDate = new Date(parseInt(startTemp[1]), parseInt(startTemp[0]) - 1, 1);
    this.endDate = new Date(this.startDate.getFullYear(), this.startDate.getMonth() + 1, 0);
    this.filteredBlue = this.blueData.filter(row => {
      return (new Date(row.documentDate)).getTime() >= this.startDate.getTime() &&
        (new Date(row.documentDate)).getTime() <= this.endDate.getTime();
    });
    this.filteredRed = this.redData.filter(row => {
      return (new Date(row.documentDate)).getTime() >= this.startDate.getTime() &&
        (new Date(row.documentDate)).getTime() <= this.endDate.getTime();
    });
    this.filteredGreen = this.greenData.filter(row => {
      return (new Date(row.documentDate)).getTime() >= this.startDate.getTime() &&
        (new Date(row.documentDate)).getTime() <= this.endDate.getTime();
    });
  }

}
