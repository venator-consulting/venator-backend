import { Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { AnalysisService } from 'src/app/shared/service/analysis.service';
import { TranslateService } from '@ngx-translate/core';
import { TextAnalysisDetailsWord } from 'src/app/shared/model/textAnalysis';
import { AmountAnalysisDetailsChart } from 'src/app/shared/model/amountAnalysis';
import { CurrencyPipe } from '@angular/common';
import { MailHistoryService } from 'src/app/shared/service/mail-history.service';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import html2canvas from 'html2canvas';
import { MailSenderChart, MailWordChart } from 'src/app/shared/model/mailHistory';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-creditor-analysis-details',
  templateUrl: './creditor-analysis-details.component.html',
  styleUrls: ['./creditor-analysis-details.component.sass'],
})
export class CreditorAnalysisDetailsComponent implements OnInit, OnDestroy {

  public Editor = ClassicEditor;

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
  // chart options with legends
  legendOptions: any;
  balanceChartData: AmountAnalysisDetailsChart[] = new Array();
  amountChartData: { labels: any[]; datasets: { data: any[]; backgroundColor: string[]; hoverBackgroundColor: string[]; }[]; };

  // payment analysis chart
  paymentChartData: any;
  paymentChartHasData: boolean = false;

  // due date analysis chart
  dueDateChartData: any;
  dueDateChartOptions: any;

  // email by sender analysis
  mailSenderChartData: any;

  // email by word analysis
  mailWordChartData: any;

  comment: any;
  showSideBar: boolean = false;

  //#region Export PDF
  @ViewChild('amountChart') amountChart: { el: ElementRef };
  @ViewChild('textChart') textChart: { el: ElementRef };
  @ViewChild('paymentChart') paymentChart: { el: ElementRef };
  @ViewChild('dueDateChart') dueDateChart: { el: ElementRef };
  @ViewChild('mailSenderChart') mailSenderChart: { el: ElementRef };
  @ViewChild('mailWordChart') mailWordChart: { el: ElementRef };
  @ViewChild('textDetails') textDetails: ElementRef;
  @ViewChild('amountDetails') amountDetails: ElementRef;
  @ViewChild('paymentDetails') paymentDetails: ElementRef;
  @ViewChild('mailSenderDetails') mailSenderDetails: ElementRef;
  @ViewChild('dueDateDetails') dueDateDetails: ElementRef;
  dueDateChartDataRecords: any;
  mailSenderChartRecords: MailSenderChart[];
  mailWordChartRecords: MailWordChart[];

  canExported: any[] = [];
  canExportedDetails: any[] = [];
  exporting: boolean = false;
  //#endregion Export PDF

  //#region Subscription to destroy them for memory leaks
  translateSub: Subscription;
  creditorDetailsSub: Subscription;
  amountSub: Subscription;
  textWordSub: Subscription;
  paymentSub: Subscription;
  dueDateSub: Subscription;
  mailSenderSub: Subscription;
  mailWordSub: Subscription;
  creditorCommentSub: Subscription;
  updateCommentSub: Subscription;
  relevantSub: any;
  //#endregion Subscription
  //#endregion vars init

  constructor(
    public _translateService: TranslateService,
    private _route: ActivatedRoute,
    private _analysisService: AnalysisService,
    private _messageService: MessageService,
    private _router: Router,
    private _mailService: MailHistoryService,
    // to create html elements by code
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.selectedOrganisation = +localStorage.getItem('organisationId');
    this.selectedProcedure = +localStorage.getItem('currentProcedureId');
    this.procedureName = localStorage.getItem('currentProcedureName');

    this.accountNumber = this._route.snapshot.paramMap.get('accountNumber');

    this.translateSub = this._translateService.get('CreditorsAnalysis')
      .subscribe((elem) => {
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
        this.creditorDetailsSub = this._analysisService
          .getCreditorAnalysisDetails(this.selectedOrganisation, this.selectedProcedure, this.accountNumber)
          .subscribe(
            (res) => {
              this.totalAmount = res.amount.length > 0 ? res.amount[0].totalBalance : 0;
              this.totalAmountCount = res.amount.length > 0 ? res.amount[0].totlaCount : 0;
              // for export as pdf and check box
              this.canExportedDetails.push({ name: 'amountDetails', title: 'CreditorsAnalysis.amountDetials', hasData: this.totalAmountCount > 0 });
              this.totalPayment = res.payment.length > 0 ? res.payment[0].totalBalance : 0;
              this.totalPaymentCount = res.payment.length > 0 ? res.payment[0].totlaCount : 0;
              this.canExportedDetails.push({ name: 'paymentDetails', title: 'CreditorsAnalysis.paymentDetials', hasData: this.totalPaymentCount > 0 });
              this.totalText = res.text.length > 0 ? res.text[0].totalBalance : 0;
              this.totalTextCount = res.text.length > 0 ? res.text[0].totlaCount : 0;
              this.canExportedDetails.push({ name: 'textDetails', title: 'CreditorsAnalysis.textDetials', hasData: this.totalTextCount > 0 });
              // this.totalEmailCount = res.email.length > 0 ? res.email[0].totlaCount : 0;
              this.totlaSenderCount = res.email?.length;
              res.email?.forEach(sender => {
                this.totalEmailCount += +sender.totlaCount ?? 0;
              });
              this.canExportedDetails.push({ name: 'mailSenderDetails', title: 'CreditorsAnalysis.mailDetials', hasData: this.totalEmailCount > 0 });
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

    this.legendOptions = {
      legend: {
        display: true
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
    this.amountSub = this._analysisService
      .getAmountAnalysisDetailsChart(this.selectedOrganisation, this.selectedProcedure, this.accountNumber, 500)
      .subscribe(res => {
        this.balanceChartData = res;
        this.canExported.push({ chart: 'amountChart', title: 'CreditorsAnalysis.amountAnalysis', hasData: this.balanceChartData.length > 0 });

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
    this.textWordSub = this._analysisService
      .getTextAnalysisDetailsWords(this.selectedOrganisation, this.selectedProcedure, this.accountNumber)
      .subscribe(res => {
        this.wordsChartData = res;
        this.canExported.push({ chart: 'textChart', title: 'CreditorsAnalysis.textAnalysis', hasData: this.wordsChartData.length > 0 });
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
    this.paymentSub = this._analysisService
      .getPaymentAnalysisDetails(
        this.selectedOrganisation,
        this.selectedProcedure,
        this.accountNumber
      )
      .subscribe(
        async (res) => {
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

          this.canExported.push({ chart: 'paymentChart', title: 'CreditorsAnalysis.paymentAnalysis', hasData: data.length > 0 });
          this.paymentChartData = {
            labels: labels,
            datasets: new Array(),
          };

          this.paymentChartData.datasets.push(
            {
              label: await this._translateService.get('PaymentAnalysis.blue').toPromise(),
              backgroundColor: `rgb(100,100,255)`,
              data: blue,
            },
            {
              label: await this._translateService.get('PaymentAnalysis.red').toPromise(),
              backgroundColor: `rgb(255,100,100)`,
              data: red,
            },
            {
              label: await this._translateService.get('PaymentAnalysis.green').toPromise(),
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
    this.dueDateSub = this._analysisService
      .getDueDateAnalysis(this.selectedOrganisation, this.selectedProcedure, start, end, parmas)
      .subscribe(
        async (res) => {
          this.dueDateChartDataRecords = res.data.dueDateReference.recordsDelay;

          let thisAccountDetails = res.data?.dueDateRefAccounts[0];
          this.totlaDueDateCount = thisAccountDetails?.count ?? 0;
          this.canExported.push({ chart: 'dueDateChart', title: 'CreditorsAnalysis.dueDateAnalysis', hasData: this.dueDateChartDataRecords.length > 0 });
          this.canExportedDetails.push({ name: 'dueDateDetails', title: 'CreditorsAnalysis.dueDateDetials', hasData: this.totlaDueDateCount > 0 });
          this.totalDueDate = +thisAccountDetails?.delayNeg + +thisAccountDetails?.delayPos;
          let labels = res.data.dueDateReference.labels;
          let minDate = new Date(res.dateRange[0].mindate);
          // let maxDate = new Date(res.dateRange[0].maxdate);
          this.dueDateChartOptions = {
            tooltips: {
              callbacks: {
                label: (tooltipItem, data) => {
                  // debugger;
                  let value = tooltipItem.value;
                  let point = this.dueDateChartDataRecords[tooltipItem.index];
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
              data: this.dueDateChartDataRecords,
              fill: false,
            }]
          };
        });
  }

  getMailBySender() {
    this.mailSenderSub = this._mailService
      .getMailDetailsAnalysisSenderByAccountChart(this.selectedOrganisation, this.selectedProcedure, this.accountNumber)
      .subscribe(res => {
        this.mailSenderChartRecords = res;
        this.canExported.push({ chart: 'mailSenderChart', title: 'CreditorsAnalysis.mailSenderAnalysis', hasData: res.length > 0 });
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
    this.mailWordSub = this._mailService
      .getMailDetailsAnalysisWordByAccountChart(this.selectedOrganisation, this.selectedProcedure, this.accountNumber)
      .subscribe(res => {
        this.canExported.push({ chart: 'mailWordChart', title: 'CreditorsAnalysis.mailWordAnalysis', hasData: res.length > 0 });
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
    this.creditorCommentSub = this._analysisService
      .getCreditorComment(this.selectedOrganisation, this.selectedProcedure, this.accountNumber)
      .subscribe(res => {
        this.comment = res.comment;
      });
  }

  updateCreditorComment() {
    this.waiting = true;
    this.updateCommentSub = this._analysisService
      .updateCreditorComment(this.selectedOrganisation, this.selectedProcedure, this.accountNumber, { comment: this.comment })
      .subscribe(res => {
        this.waiting = false;
        this._messageService.add({ severity: 'success', detail: 'Updated Successfully' });
      }, er => this.waiting = false);
  }

  //#region  export pdf
  public async exportPDF(): Promise<void> {
    this.exporting = true;
    // a4 size is 210 * 296 approximately
    let PDF = new jsPDF('p', 'mm', 'a4');
    let positionY = 25;
    let fileWidth = 210;
    PDF.setFontSize(10);
    //  add procedure name
    let translatedPrc = await this._translateService.get('CreditorsAnalysis.procedureName').toPromise();
    PDF.text(translatedPrc + ': ' + this.procedureName, 10, positionY, { align: 'left' });
    positionY += 5;
    // add account number and name
    let translatedAccount = await this._translateService.get('CreditorsAnalysis.account').toPromise();
    PDF.text(translatedAccount + ': ' + this.accountNumber + ' - ' + this.accountName,
      10, positionY, { align: 'left' });
    positionY += 5;
    // let translatedAccountName = await this._translateService.get('CreditorsAnalysis.accountName').toPromise();
    // PDF.text(translatedAccountName + ': ' + this.accountName, 10, positionY, { align: 'left' });
    // positionY += 10;

    PDF.setFontSize(8);
    // add the comment
    // get html comment
    let htmlCommentCollection = document.getElementsByClassName('ck-content');
    let htmlComment: HTMLElement = htmlCommentCollection.item(0) as HTMLElement;
    htmlComment.innerHTML += `<style>
                                *{margin: 0}
                                h2{font-size: 7px;} 
                                h3{font-size: 6px;}
                                h4{font-size: 5px;}
                                p, li{font-size: 3.5px;}
                            </style>`;
    PDF.html(htmlComment, {
      x: 0, y: positionY, width: 200,
      // fontFaces:
      callback: async (doc: jsPDF) => {
        positionY += htmlComment.clientHeight * 295 / window.innerHeight;
        debugger;
        // const canvas = await html2canvas(htmlComment);
        // calculate height with scaling
        // const height = (canvas.height * fileWidth) / canvas.width;
        // convert canvas to image
        // const image = canvas.toDataURL('image/png');
        // add image to pdf
        // add 10 for title
        // if ((positionY + height + 20) > 290) {
        //   PDF.addPage('a4', 'p');
        //   positionY = 25;
        // }

        // PDF.addImage(image, 'PNG', 10, positionY, fileWidth - 10, height);
        // positionY += height + 10;

        //#region Convert charts and tables
        for (const chart of this.canExported) {
          if (chart.export)
            positionY = await this.addSectionToPDF(PDF, chart.chart, positionY, chart.title);
        }
        //#endregion Convert charts

        //#region details
        for (const table of this.canExportedDetails) {
          if (table.export)
            positionY = await this.addSectionDetailsToPDF(PDF, table.name, positionY, table.title);
        }
        //#endregion Details

        //#region add the footer
        PDF.setFontSize(8);
        PDF.text('Report Exported at: ' + (new Date()).toLocaleString("de-DE", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }), 10, 290, { align: 'left' });
        //#endregion add the footer

        //#region add footer
        const addFootersAndHeaders = (pdf: jsPDF) => {
          const pageCount = (pdf.internal as any).getNumberOfPages();
          // get logo html
          let logoImg = document.getElementById('logo') as HTMLImageElement;

          for (var i = 1; i <= pageCount; i++) {
            // select the page
            pdf.setPage(i);
            //#region header 
            if (i == 1) {
              // paint the gray rectangle
              pdf.setFillColor(88, 88, 90);
              // grey for the header
              pdf.rect(0, 0, pdf.internal.pageSize.width, 19, 'F');
              // add the brand
              pdf.setFontSize(16);
              pdf.setTextColor(232, 79, 19);
              pdf.text('Venalytics', 10, 11, { align: 'left' });
              // add the logo
              pdf.addImage(logoImg, 'PNG', 37, 5, 8, 8);
              pdf.setFontSize(11);
              //  add procedure name
              // pdf.setTextColor(255, 255, 255);
              // pdf.text(this.procedureName, 80, 11);
              // add account number and name
              // pdf.text(this.accountNumber + ' - ' + this.accountName, 60, 16);
            }
            //#endregion header
            // gray for the footer
            // pdf.setFillColor(88, 88, 90);
            // pdf.rect(0, pdf.internal.pageSize.height - 17, pdf.internal.pageSize.width, pdf.internal.pageSize.height, 'F');
            // pdf.setTextColor(255, 255, 255);
            pdf.setFont('helvetica', 'italic');
            pdf.setFontSize(8);
            pdf.text('[' + String(i) + '/' + String(pageCount) + ']', pdf.internal.pageSize.width - 20,
              pdf.internal.pageSize.height - 8, {
              align: 'right',
            });
          }
        };

        addFootersAndHeaders(PDF);
        //#endregion add footer

        // download pdf
        PDF.save(this.accountNumber + '-' + this.accountName + '.pdf');
        this.exporting = false;
        PDF = null;

      }
    });
  }

  async addSectionToPDF(pdf: jsPDF, section: string, positionY: number, title?: string): Promise<number> {
    return new Promise(async (resolve, reject) => {
      let fileWidth = 208;
      // get html
      let html: HTMLElement = this[section].el.nativeElement;

      // get canvas
      let canvas = html.querySelector("canvas");
      // canvas.style.background = "white";
      const height = (140 / canvas.width) * canvas.height;
      if ((positionY + height + 20) > 290) {
        pdf.addPage('a4', 'p');
        positionY = 25;
      }
      let translatedTitle = await this._translateService.get(title).toPromise();
      pdf.setFontSize(10);
      pdf.text(translatedTitle, 10, positionY);
      let image = canvas.toDataURL('image/png');
      pdf.addImage(image, 'PNG', 35, positionY + 10, 140, height, null, 'NONE');
      positionY += (height + 20);
      // add total info
      pdf.setFontSize(8);
      // pdf.text(await this.getTotalInfo(section), 10, positionY);
      // positionY += 20;
      resolve(positionY);
    });

  }

  async getTotalInfo(name: string): Promise<string> {
    let currencyPipe = new CurrencyPipe('de');
    let text = ' ';
    switch (name) {
      case 'amountChart':
        let amountBalanceTitle = await this._translateService.get('CreditorsAnalysis.amountTotalBalance').toPromise();
        let amountCountTitle = await this._translateService.get('CreditorsAnalysis.amountTotalCount').toPromise();
        text = amountBalanceTitle + ': ' + currencyPipe.transform(this.totalAmount ?? 0, 'EURO', 'symbol') +
          '\n' + amountCountTitle + ': ' + this.totalAmountCount;
        break;
      case 'textChart':
        let textBalanceTitle = await this._translateService.get('CreditorsAnalysis.textTotalBalance').toPromise();
        let textCountTitle = await this._translateService.get('CreditorsAnalysis.textTotalCount').toPromise();
        text = textBalanceTitle + ': ' + currencyPipe.transform(this.totalText ?? 0, 'EURO', 'symbol') +
          '\n' + textCountTitle + ': ' + this.totalTextCount;
        break;
      case 'paymentChart':
        let paymentBalanceTitle = await this._translateService.get('CreditorsAnalysis.paymentTotalBalance').toPromise();
        let paymentCountTitle = await this._translateService.get('CreditorsAnalysis.paymentTotalCount').toPromise();
        text = paymentBalanceTitle + ': ' + currencyPipe.transform(this.totalPayment ?? 0, 'EURO', 'symbol') +
          '\n' + paymentCountTitle + ': ' + this.totalPaymentCount;
        break;
      case 'dueDateChart':
        let dueDateBalanceTitle = await this._translateService.get('CreditorsAnalysis.dueDateTotalBalance').toPromise();
        let dueDateCountTitle = await this._translateService.get('CreditorsAnalysis.dueDateTotalCount').toPromise();
        text = dueDateBalanceTitle + ': ' + currencyPipe.transform(this.totalDueDate ?? 0, 'EURO', 'symbol') +
          '\n' + dueDateCountTitle + ': ' + this.totlaDueDateCount;
        break;
      case 'mailSenderChart':
        let mailSenderCountTitle = await this._translateService.get('CreditorsAnalysis.senderTotalCount').toPromise();
        text = mailSenderCountTitle + ': ' + this.totlaSenderCount;
        break;
      case 'mailWordChart':
        let mailWordCountTitle = await this._translateService.get('CreditorsAnalysis.emailTotalCount').toPromise();
        text = mailWordCountTitle + ': ' + this.totalEmailCount;
        break;
    }
    return text;
  }

  async addSectionDetailsToPDF(pdf: jsPDF, componentName: string, positionY: number, title: string): Promise<number> {
    return new Promise(async (resolve, reject) => {
      let translatedTitle = await this._translateService.get(title).toPromise();
      pdf.setFontSize(8);
      pdf.text(translatedTitle, 10, positionY);
      positionY += 10;
      let currencyPipe = new CurrencyPipe('de');
      pdf.setFontSize(6);
      console.log(componentName);

      // let headers = this[componentName].getColumns();
      this.relevantSub = this[componentName].getRelevant()
        ?.subscribe(async (res) => {
          debugger;
          if (componentName == 'dueDateDetails') res = res.data.records;
          //@ts-ignore
          pdf.autoTable({
            startY: positionY,
            // columns: headers?.map(header => ({ header: header.field, dataKey: header.field })),
            columns: await this.getHeaders(componentName),
            body: res.map(rec => ({
              ...rec, documentDate: (new Date(rec.documentDate)).toLocaleString("de-DE", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              }),
              balance: currencyPipe.transform(rec.balance, 'EURO', '')
            })),
            margin: { top: 25 },
            styles: { overflow: 'linebreak', fontSize: 6, },
            headStyles: { fillColor: [88, 88, 90] }
          });
          // debugger;
          //@ts-ignore
          let newPosition = pdf.previousAutoTable.finalY;
          if (!res?.length) {
            pdf.text('No Relevant Records found', 100, newPosition + 10, { align: 'center' });
          }
          newPosition += 20;
          resolve(newPosition);
        }, er => reject(er));
    });
  }

  async getHeaders(name: string): Promise<any[]> {
    let headers = [
      { header: await this._translateService.get('DataTableColumns.contraAccountNumber').toPromise(), dataKey: 'contraAccountNumber' },
      { header: await this._translateService.get('DataTableColumns.contraAccountName').toPromise(), dataKey: 'contraAccountName' },
      { header: await this._translateService.get('DataTableColumns.documentType').toPromise(), dataKey: 'documentType' },
      { header: await this._translateService.get('DataTableColumns.documentNumber').toPromise(), dataKey: 'documentNumber' },
      { header: await this._translateService.get('DataTableColumns.documentDate').toPromise(), dataKey: 'documentDate' },
      { header: await this._translateService.get('DataTableColumns.balance').toPromise(), dataKey: 'balance' },
    ];
    switch (name) {
      case 'textDetails':
        headers.push(
          { header: await this._translateService.get('PaymentAnalysis.comment').toPromise(), dataKey: 'textRelevantComment' },
          { header: await this._translateService.get('DataTableColumns.reference').toPromise(), dataKey: 'reference' },
          // { header: await this._translateService.get('DataTableColumns.textPosting').toPromise(), dataKey: 'textPosting' },
          // { header: await this._translateService.get('DataTableColumns.textHeader').toPromise(), dataKey: 'textHeader' },
        );
        break;
      case 'amountDetails':
        headers.push(
          { header: await this._translateService.get('PaymentAnalysis.comment').toPromise(), dataKey: 'amountRelevantComment' },
        );
        break;
      case 'paymentDetails':
        headers.push(
          { header: await this._translateService.get('PaymentAnalysis.comment').toPromise(), dataKey: 'paymentRelevantComment' },
        );
        break;
      case 'dueDateDetails':
        // headers.push(
        //   { header: await this._translateService.get('PaymentAnalysis.comment').toPromise(), dataKey: 'dueDateRelevantComment' },
        // );
        break;
      case 'mailSenderDetails':
        headers = [
          { header: await this._translateService.get('PaymentAnalysis.email').toPromise(), dataKey: 'email' },
          { header: await this._translateService.get('PaymentAnalysis.sender').toPromise(), dataKey: 'sender' },
          { header: await this._translateService.get('PaymentAnalysis.rcvName').toPromise(), dataKey: 'rcvName' },
          { header: await this._translateService.get('PaymentAnalysis.subject').toPromise(), dataKey: 'subject' },
          { header: await this._translateService.get('PaymentAnalysis.body').toPromise(), dataKey: 'body' },
          { header: await this._translateService.get('PaymentAnalysis.comment').toPromise(), dataKey: 'senderComment' },
        ];
        break;
    }
    return headers;
  }
  //#endregion export pdf


  ngOnDestroy() {
    this.translateSub?.unsubscribe();
    this.creditorDetailsSub?.unsubscribe();
    this.amountSub?.unsubscribe();
    this.textWordSub?.unsubscribe();
    this.paymentSub?.unsubscribe();
    this.dueDateSub?.unsubscribe();
    this.mailSenderSub?.unsubscribe();
    this.mailWordSub?.unsubscribe();
    this.creditorCommentSub?.unsubscribe();
    this.updateCommentSub?.unsubscribe();
    this.relevantSub?.unsubscribe();
  }

}
