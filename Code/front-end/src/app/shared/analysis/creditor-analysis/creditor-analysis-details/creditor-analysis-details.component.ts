import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { AnalysisService } from 'src/app/shared/service/analysis.service';
import { TranslateService } from '@ngx-translate/core';
import { TextAnalysisDetailsWord } from 'src/app/shared/model/textAnalysis';
import { AmountAnalysisDetailsChart } from 'src/app/shared/model/amountAnalysis';
import { CurrencyPipe } from '@angular/common';
import { MailHistoryService } from 'src/app/shared/service/mail-history.service';
import { SanitizePipe } from 'src/app/shared/pipes/sanitize.pipe';

@Component({
  selector: 'app-creditor-analysis-details',
  templateUrl: './creditor-analysis-details.component.html',
  styleUrls: ['./creditor-analysis-details.component.sass'],
  providers: [SanitizePipe]
})
export class CreditorAnalysisDetailsComponent implements OnInit {

  //#region vars init
  accountNumber: string;
  procedureName: string;
  selectedProcedure: number;
  selectedOrganisation: number;
  accountName: string;
  totalAmount: number;
  totalText: number;
  totalPayment: number;
  totalDueDate: number;
  totlaDueDateCount: number = 0;
  displayDetails: number;
  // chartData: any;
  totalAmountCount: number = 0;
  totalPaymentCount: number = 0;
  totalEmailCount: number = 0;
  totlaSenderCount: number = 0;
  totalTextCount: number = 0;
  items: MenuItem[];
  home: MenuItem;
  waiting: boolean = true;

  // text analysis chart
  wordsChartData: TextAnalysisDetailsWord[] = new Array();
  chartData: { labels: any[]; datasets: { data: any[]; backgroundColor: string[]; hoverBackgroundColor: string[]; }[]; };

  // amount analysis chart
  basicOptions: any;
  balanceChartData: AmountAnalysisDetailsChart[] = new Array();
  amountChartData: { labels: any[]; datasets: { data: any[]; backgroundColor: string[]; hoverBackgroundColor: string[]; }[]; };

  // payment analysis chart
  paymentChartData: any;

  // due date analysis chart
  dueDateChartData: any;
  dueDateChartOptions: any;

  // email by sender analysis
  mailSenderChartData: any;

  // email by word analysis
  mailWordChartData: any;

  comment: any;
  showSideBar: boolean = false;
  //#endregion vars init

  constructor(
    public _translateService: TranslateService,
    private _route: ActivatedRoute,
    private _analysisService: AnalysisService,
    private _messageService: MessageService,
    private _router: Router,
    private _mailService: MailHistoryService,
    private sanitize: SanitizePipe
  ) { }

  ngOnInit(): void {
    this.selectedOrganisation = +localStorage.getItem('organisationId');
    this.selectedProcedure = +localStorage.getItem('currentProcedureId');
    this.procedureName = localStorage.getItem('currentProcedureName');

    this.accountNumber = this._route.snapshot.paramMap.get('accountNumber');

    this._translateService.get('CreditorsAnalysis').subscribe((elem) => {
      this.items = [
        // { label: 'Analysis' },
        {
          label: elem.label,
          routerLink: '/dashboard/analysis/creditor',
          routerLinkActiveOptions: { exact: true },
        },
        {
          label: 'Details',
          routerLink: this._router.url,
          routerLinkActiveOptions: { exact: true },
        },
      ];
      this.home = {
        icon: 'pi pi-home',
        label: elem.data,
        routerLink: '/dashboard/shared/data',
      };
      this.waiting = true;
      this._analysisService
        .getCreditorAnalysisDetails(this.selectedOrganisation, this.selectedProcedure, this.accountNumber)
        .subscribe(
          (res) => {
            this.totalAmount = res.amount.length > 0 ? res.amount[0].totalBalance : 0;
            this.totalAmountCount = res.amount.length > 0 ? res.amount[0].totlaCount : 0;
            this.totalPayment = res.payment.length > 0 ? res.payment[0].totalBalance : 0;
            this.totalPaymentCount = res.payment.length > 0 ? res.payment[0].totlaCount : 0;
            this.totalText = res.text.length > 0 ? res.text[0].totalBalance : 0;
            this.totalTextCount = res.text.length > 0 ? res.text[0].totlaCount : 0;
            // this.totalEmailCount = res.email.length > 0 ? res.email[0].totlaCount : 0;
            this.totlaSenderCount = res.email?.length;
            res.email?.forEach(sender => {
              this.totalEmailCount += +sender.totlaCount ?? 0;
            });
            this.accountName =
              res.text.length > 0
                ? res.text[0].accountName
                : res.amount.length > 0
                  ? res.amount[0].accountName
                  : res.payment[0]?.accountName;
            // this.chartData = {
            //   labels: [elem.amountLabel, elem.textLabel, elem.paymentLabel],
            //   datasets: [
            //     {
            //       data: [this.totalAmount, this.totalText, this.totalPayment],
            //       backgroundColor: ['#95ca14', '#587bc7', '#fc6521'],
            //       hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            //     },
            //   ],
            // };
            this.waiting = false;
          },
          (er) => {
            this.waiting = false;
          }
        );
    });

    this.basicOptions = {
      legend: {
        display: false
      },
      tooltips: {
        callbacks: {
          label: function (tooltipItem, data) {
            let value = tooltipItem.value;
            let currencyPipe = new CurrencyPipe('de');
            value = currencyPipe.transform(value, 'EURO', '');

            let label = data.datasets[tooltipItem.datasetIndex].label || '';
            return label + ': ' + value;
          },
        },
      },
      scales: {
        xAxes: [
          {
            ticks: {
              minRotation: 40,
              maxRotation: 90,
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              minRotation: 0,
              maxRotation: 0,
              callback: function (label, index, values) {
                // debugger;
                let currencyPipe = new CurrencyPipe('de');
                label = currencyPipe.transform(label, 'EURO', '');
                return label;
              },
            },
          },
        ],
      },
    };
    this.getAmountChartData();
    this.getWords();
    this.getPaymentChartData();
    this.getDueDateChartData();
    this.getMailBySender();
    this.getMailWordChartData();
    this.getCreditorComment();
  } // end of ng on init

  getAmountChartData() {
    this._analysisService
      .getAmountAnalysisDetailsChart(this.selectedOrganisation, this.selectedProcedure, this.accountNumber, 500)
      .subscribe(res => {
        this.balanceChartData = res;
        this.amountChartData = {
          labels: this.balanceChartData.map(rec => rec.balance),
          datasets: [
            {
              data: this.balanceChartData.map(rec => +rec.totalBalance),
              backgroundColor: this.balanceChartData.map(rec => `rgb(${Math.random() * 25500 % 255}, ${Math.random() * 25500 % 255}, ${Math.random() * 25500 % 255})`),
              hoverBackgroundColor: this.balanceChartData.map(rec => `rgb(${(Math.random() * 25500 + 10) % 255}, ${(Math.random() * 25500 + 10) % 255}, ${(Math.random() * 25500 + 10) % 255})`),
            },
          ],
        };
      });
  }

  getWords() {
    this._analysisService
      .getTextAnalysisDetailsWords(this.selectedOrganisation, this.selectedProcedure, this.accountNumber)
      .subscribe(res => {
        this.wordsChartData = res;

        this.chartData = {
          labels: this.wordsChartData.map(rec => rec.word),
          datasets: [
            {
              data: this.wordsChartData.map(rec => +rec.totalBalance),
              backgroundColor: ['#95ca14', '#587bc7', '#fc6521'],
              hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
          ],
        };

      });
  }

  getPaymentChartData() {
    this._analysisService
      .getPaymentAnalysisDetails(
        this.selectedOrganisation,
        this.selectedProcedure,
        this.accountNumber
      )
      .subscribe(
        (res) => {
          let data = res.data.data;
          let labels = new Array();
          let red = new Array();
          let blue = new Array();
          let green = new Array();
          for (let i = 0; i < data.length; i++) {
            const element = data[i];
            labels.push(element.monthName + '-' + element.yearName);
            blue.push(-1 * (element.blue.value));
            green.push(element.green.value);
            red.push(-1 * (element.red.value));
          }

          this.paymentChartData = {
            labels: labels,
            datasets: new Array(),
          };

          this.paymentChartData.datasets.push(
            {
              label: 'blue',
              backgroundColor: `rgb(100,100,255)`,
              data: blue,
            },
            {
              label: 'red',
              backgroundColor: `rgb(255,100,100)`,
              data: red,
            },
            {
              label: 'green',
              backgroundColor: `rgb(100,255,100)`,
              data: green,
            }
          );

          // this.paymentChartReady = true;
        }
      );
  }

  getDueDateChartData() {
    let start;
    let end;
    let parmas = { maxDelay: undefined, accountNumber: this.accountNumber };
    this._analysisService
      .getDueDateAnalysis(this.selectedOrganisation, this.selectedProcedure, start, end, parmas)
      .subscribe(
        async (res) => {
          let secondChartDataRecords = res.data.dueDateReference.recordsDelay;
          let thisAccountDetails = res.data?.dueDateRefAccounts[0];
          this.totlaDueDateCount = thisAccountDetails?.count ?? 0;
          this.totalDueDate = +thisAccountDetails?.delayNeg + +thisAccountDetails?.delayPos;
          let labels = res.data.dueDateReference.labels;
          let minDate = new Date(res.dateRange[0].mindate);
          this.dueDateChartOptions = {
            tooltips: {
              callbacks: {
                label: (tooltipItem, data) => {
                  // debugger;
                  let value = tooltipItem.value;
                  let point = secondChartDataRecords[tooltipItem.index];
                  let label = point.label;
                  let accountNumber = point?.accountNumber;
                  let accountName = point?.accountName;
                  return label + ' :' + value + '  - ' + accountNumber + '/' + accountName;
                },
              },
            },
            scales: {
              yAxes: [{
                stacked: true,
                gridLines: {
                  display: true,
                  color: "rgba(255,99,132,0.2)"
                }
              }],
              xAxes: [{
                stacked: true,
                gridLines: {
                  display: true,
                  color: "rgba(255,99,132,0.2)"
                },
                ticks: {
                  minRotation: 40,
                  maxRotation: 90,
                  callback: (label, index, values) => {
                    let tempDate = new Date(minDate);
                    tempDate.setDate(tempDate.getDate() + label);
                    label = tempDate.toLocaleString("de-DE", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    });
                    return label;
                  },
                },
              }]
            },
          };
          this.dueDateChartData = {
            labels: labels,
            datasets: [{
              label: await this._translateService.get('DueDateAnalysis.secondChartLabel').toPromise(),
              borderColor: `rgb(100,100,255)`,
              data: secondChartDataRecords,
              fill: false,
            }]
          };
        });
  }

  getMailBySender() {
    this._mailService
      .getMailDetailsAnalysisSenderByAccountChart(this.selectedOrganisation, this.selectedProcedure, this.accountNumber)
      .subscribe(res => {
        this.mailSenderChartData = {
          labels: res?.map(rec => rec.email + ' - ' + rec.sender),
          datasets: [
            {
              data: res?.map(rec => +rec.totalCount),
              backgroundColor: res?.map(rec => `rgb(${Math.random() * 25500 % 255}, ${Math.random() * 25500 % 255}, ${Math.random() * 25500 % 255})`),
              hoverBackgroundColor: res?.map(rec => `rgb(${(Math.random() * 25500 + 10) % 255}, ${(Math.random() * 25500 + 10) % 255}, ${(Math.random() * 25500 + 10) % 255})`),
            },
          ],
        };
      });
  }

  getMailWordChartData() {
    this._mailService
      .getMailDetailsAnalysisWordByAccountChart(this.selectedOrganisation, this.selectedProcedure, this.accountNumber)
      .subscribe(res => {
        this.mailWordChartData = {
          labels: res?.map(rec => rec.word),
          datasets: [
            {
              data: res?.map(rec => +rec.totalCount),
              backgroundColor: res?.map(rec => `rgb(${Math.random() * 25500 % 255}, ${Math.random() * 25500 % 255}, ${Math.random() * 25500 % 255})`),
              hoverBackgroundColor: res?.map(rec => `rgb(${(Math.random() * 25500 + 10) % 255}, ${(Math.random() * 25500 + 10) % 255}, ${(Math.random() * 25500 + 10) % 255})`),
            },
          ],
        };
      });
  }

  setDetails(option: number) {
    this.displayDetails = option;
  }

  getCreditorComment() {
    this._analysisService
      .getCreditorComment(this.selectedOrganisation, this.selectedProcedure, this.accountNumber)
      .subscribe(res => {
        this.comment = res.comment;
        // this.comment = this.sanitize.transform(res.comment);
        // debugger;
      });
  }

  updateCreditorComment() {
    this.waiting = true;
    this._analysisService
      .updateCreditorComment(this.selectedOrganisation, this.selectedProcedure, this.accountNumber, { comment: this.comment })
      .subscribe(res => {
        this.waiting = false;
        this._messageService.add({ severity: 'success', detail: 'Updated Successfully' });
      }, er => this.waiting = false);
  }


}
