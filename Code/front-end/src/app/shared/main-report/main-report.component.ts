import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { ProcedureService } from '../service/procedure.service';

@Component({
  selector: 'app-main-report',
  templateUrl: './main-report.component.html',
  styleUrls: ['./main-report.component.sass']
})
export class MainReportComponent implements OnInit {

  constructor(private _translateService: TranslateService,
    private _procedureService: ProcedureService,
    private _messageService: MessageService) { }

  public Editor = ClassicEditor;
  items: MenuItem[];
  home: MenuItem;
  // for progress when update comment
  waiting: boolean = false;
  translateSub: Subscription;
  procedureName: string;
  selectedProcedure: number;
  selectedOrganisation: number;

  comment: any;
  showSideBar: boolean = false;
  canExported: any[] = [];
  // for progress when export pdf
  exporting: boolean = false;

  @ViewChild('liquidityChart') liquidityChart: { el: ElementRef };
  @ViewChild('allPaymentChart') allPaymentChart: { el: ElementRef };
  @ViewChild('dueDateChart') dueDateChart: { el: ElementRef };

  ngOnInit(): void {

    this.procedureName = localStorage.getItem('currentProcedureName');
    this.selectedOrganisation = +localStorage.getItem('organisationId');
    this.selectedProcedure = +localStorage.getItem('currentProcedureId');

    this.translateSub = this._translateService.get('sideBarMenu')
      .subscribe((elem) => {
        this.items = [
          {
            label: elem.mainReport,
            routerLink: '/dashboard/analysis/creditor',
            routerLinkActiveOptions: { exact: true },
          }
        ];
        this.home = {
          icon: 'pi pi-home',
          label: elem.data,
          routerLink: '/dashboard/shared/data',
        };
      });

    this.getProcedureComment();

    this.canExported = [
      { index: 1, name: 'liquidityChart', title: 'sideBarMenu.liquidityAnalysis' },
      { index: 1, name: 'allPaymentChart', title: 'sideBarMenu.paymentAnalyse' },
      { index: 1, name: 'dueDateChart', title: 'sideBarMenu.dueDateAnalyse' }
    ];

  }

  getProcedureComment() {
    this._procedureService
      .getProcedureComment(this.selectedOrganisation, this.selectedProcedure)
      .subscribe(res => {
        this.comment = res.comment;
      });
  }

  updateProcedureComment() {
    this.waiting = true;
    this._procedureService
      .updateProcedureComment(this.selectedOrganisation, this.selectedProcedure, { comment: this.comment })
      .subscribe(res => {
        this.waiting = false;
        this._messageService.add({ severity: 'success', detail: 'Updated Successfully' });
      }, er => this.waiting = false);
  }

  async exportPDF() {
    this.exporting = true;
    // a4 size is 210 * 296 approximately
    let PDF = new jsPDF('p', 'mm', 'a4');
    let positionY = 25;
    let fileWidth = 210;
    PDF.setFontSize(11);
    PDF.setFont('helvetica', 'bold');
    PDF.setFontSize(11);
    let htmlCommentCollection = document.getElementsByClassName('ck-content');
    let htmlComment: HTMLElement = htmlCommentCollection.item(0).cloneNode(true) as HTMLElement;
    document.body.appendChild(htmlComment);
    htmlComment.style.border = 'none';
    htmlComment.style.margin = '0';
    htmlComment.style.color = 'black';
    htmlComment.style.fontFamily = 'helvetica';
    htmlComment.style.fontSize = '200%';
    htmlComment.style.width = '100%';
    htmlComment.style.textAlign = 'justify';
    const canvas = await html2canvas(htmlComment);
    // calculate height with scaling
    const height = (canvas.height * fileWidth) / canvas.width;
    // convert canvas to image
    const image = canvas.toDataURL('image/png');

    PDF.addImage(image, 'PNG', 12, positionY, fileWidth - 20, height);
    positionY += height + 10;
    //#region Convert charts and tables
    for (const chart of this.canExported) {
      positionY = await this.addSectionToPDF(PDF, chart.name, positionY, chart.title);
    }
    //#endregion Convert charts

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
        // paint the gray rectangle
        pdf.setFillColor(88, 88, 90);
        // grey for the header
        pdf.rect(0, 0, pdf.internal.pageSize.width, 19, 'F');
        // add the brand
        pdf.setFontSize(16);
        pdf.setFont('helvetica', 'bold');
        pdf.setTextColor(232, 79, 19);
        pdf.text('venalytics', 10, 11, { align: 'left' });
        // add the logo
        pdf.addImage(logoImg, 'PNG', 37, 5, 8, 8);
        pdf.setFontSize(11);
        pdf.setFont('helvetica', 'bold');
        //  add procedure name
        pdf.setTextColor(255, 255, 255);
        pdf.text(this.procedureName, 50, 9);
        //#endregion header
        // gray for the footer
        pdf.setFillColor(88, 88, 90);
        pdf.rect(0, pdf.internal.pageSize.height - 17, pdf.internal.pageSize.width, pdf.internal.pageSize.height, 'F');
        pdf.setTextColor(255, 255, 255);
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(11);
        pdf.text('[' + String(i) + '/' + String(pageCount) + ']', pdf.internal.pageSize.width - 20,
          pdf.internal.pageSize.height - 8, {
          align: 'right',
        });
      }
    };

    addFootersAndHeaders(PDF);
    //#endregion add footer

    // download pdf
    PDF.save(this.procedureName + '.pdf');
    this.exporting = false;
    PDF = null;
    document.body.removeChild(htmlComment);
  }

  async addSectionToPDF(pdf: jsPDF, name: string, positionY: number, title?: string): Promise<number> {
    return new Promise(async (resolve, reject) => {
      // get html
      // let html: HTMLElement = this[name].el.nativeElement;
      let html: HTMLElement = document.getElementById(name);
      // get canvas
      let canvas = html.querySelector("canvas");
      // canvas.style.background = "white";
      const height = (140 / canvas.width) * canvas.height;
      if ((positionY + height + 20) > 290) {
        pdf.addPage('a4', 'p');
        positionY = 25;
      }
      let translatedTitle = await this._translateService.get(title).toPromise();
      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'bold');
      pdf.text(translatedTitle, 15, positionY);
      let image = canvas.toDataURL('image/png');
      pdf.addImage(image, 'PNG', 15, positionY + 10, 170, height, null, 'NONE');
      positionY += (height + 20);
      // add total info
      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'bold');
      resolve(positionY);
    });

  }
}
