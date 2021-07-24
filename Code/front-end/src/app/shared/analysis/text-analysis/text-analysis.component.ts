import { Component, OnInit } from '@angular/core';
import { AnalysisService } from '../../service/analysis.service';
import { Bar } from '../../model/bar';
import { Router } from '@angular/router';
import { TextAnalysis } from "../../model/textAnalysis";
import { MenuItem, MessageService } from 'primeng/api';
import { ProcedureService } from '../../service/procedure.service';
import { TableColumn } from '../../model/tableColumn';

@Component({
  selector: 'app-text-analysis',
  templateUrl: './text-analysis.component.html',
  styleUrls: ['./text-analysis.component.sass']
})
export class TextAnalysisComponent implements OnInit {

  selectedOrganisation: number = 0;
  selectedProcedure: number = 0;
  basicOptions: any;
  basicData: any;
  data: TextAnalysis[] = new Array();
  cols: TableColumn[];
  waiting: boolean = false;
  procedureName: any;
  items: MenuItem[];
  home: MenuItem;


  // for filter
  searching: boolean;
  criteria: any = {};
  tempData: any[];
  accountName: string;

  constructor(private _messageService: MessageService, private _analysisService: AnalysisService,
    private _router: Router, private prcService: ProcedureService) { }

  ngOnInit(): void {

    this.items = [
      // { label: 'Analysis' },
      { label: 'Text Analysis', routerLink: '/analysis/text' }
    ];

    this.home = { icon: 'pi pi-home', label: ' Data', routerLink: '/shared/data' };

    this.waiting = true;

    this.basicOptions = {
      responsive: true,
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          type: 'linear',
          display: true,
          position: 'left',
          id: 'Count',
          ticks: {
            min: 0,
          }
        }
        ]
      }
    };

    this.selectedOrganisation = +localStorage.getItem('organisationId');
    this.selectedProcedure = +localStorage.getItem('currentProcedureId');
    this.procedureName = localStorage.getItem('currentProcedureName');

    this.cols = [
      {
        header: 'AmountAnalysis.accountNumber',
        field: 'accountNumber',
        align: 'center'
      },
      {
        header: 'AmountAnalysis.accountName',
        field: 'accountName',
        align: 'left'
      },
      {
        header: 'AmountAnalysis.NumberOfPostings',
        field: 'totlaCount',
        align: 'center'
      }
    ];


    this._analysisService
      .getTextAnalysis(this.selectedOrganisation, this.selectedProcedure)
      .subscribe(res => {
        this.data = res;
        if (this.data.length > 0) {
          this.accountName = this.data[0].accountName;
        }
        this.tempData = [...this.data];
        this.basicData = {
          labels: ['Total Count'],
          datasets: new Array()
        };
        for (let i = 0; i < this.data.length; i++) {
          const element = this.data[i];
          this.basicData.datasets.push(new Bar(element.accountName, `rgb(${Math.random() * 25500 % 255}, ${Math.random() * 25500 % 255},${Math.random() * 25500 % 255})`, element.totlaCount));
        }
        this.waiting = false;
      }, er => {
        this._messageService.add({
          severity: 'error',
          summary: 'ERROR',
          life: 10000,
          detail: "There is an error occured please try again"
        });
      });

  } // end of ng on init


  goToDetails(row: TextAnalysis) {
    this._router.navigate(['/analysis/text/' + this.selectedOrganisation + '/' + this.selectedProcedure + '/' + row.accountNumber]);
  }

  filterChange(query, colName): void {
    this.searching = true;
    // debugger;
    if (!query) {
      delete this.criteria[colName];
      if (Object.keys(this.criteria).length < 1) {
        this.data = [...this.tempData];
      } else {
        for (const key in this.criteria) {
          if (Object.prototype.hasOwnProperty.call(this.criteria, key)) {
            const element = this.criteria[key];
            if (element.length < 3) {
              this.data = this.tempData.filter(value => value[key]?.toLowerCase() == element.toLowerCase());
            } else {
              this.data = this.tempData.filter(value => value[key]?.toLowerCase().includes(element.toLowerCase()));
            }
          }
        }
      }
    } else {
      this.data = [...this.tempData];
      for (const key in this.criteria) {
        if (Object.prototype.hasOwnProperty.call(this.criteria, key)) {
          const element = this.criteria[key];
          if (element.length < 3) {
            this.data = this.data.filter(value => value[key]?.toString().toLowerCase() == element.toLowerCase());
          } else {
            this.data = this.data.filter(value => value[key]?.toString().toLowerCase().includes(element.toLowerCase()));
          }
        }
      } // end of for each criteria field
    }
    this.searching = false;
  }


}
