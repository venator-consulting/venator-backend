import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ProcedureService } from '../service/procedure.service';
import { PreCalculateService } from '../service/pre-calculate.service';
import { Procedures } from 'src/app/shared/model/procedures';
import { TranslateService } from '@ngx-translate/core';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-pre-calculate',
  templateUrl: './pre-calculate.component.html',
  styleUrls: ['./pre-calculate.component.sass']
})
export class PreCalculateComponent implements OnInit {
  orgId: number;
  prcId: number;
  procedureName: string;
  waiting: boolean;
  disableAmount: boolean;
  disableCredit: boolean;
  disabletextWord: boolean;
  disableText_account: boolean;
  disablePayment: boolean;
  disableDueDate: boolean;
  disableDocType: boolean;
  disableMailSender: boolean;
  disableMailWord: boolean;
  disableLinkTrans: boolean;
  progress = 0;

  constructor(private _preCalcService: PreCalculateService, private _messageService: MessageService,
    private _procedureService: ProcedureService, private _translateService: TranslateService) { }

  ngOnInit(): void {
    this.orgId = +localStorage.getItem('organisationId');
    this.prcId = +localStorage.getItem('currentProcedureId');
    this.disableDocType = (localStorage.getItem('currentProcedureDocType') !== 'true');
    this.procedureName = localStorage.getItem('currentProcedureName');
    this.disableAmount = (localStorage.getItem('currentProcedureAmount') === 'true');
    this.disableCredit = (localStorage.getItem('currentProcedureCredit') === 'true');
    this.disabletextWord = (localStorage.getItem('currentProcedureText_word') === 'true');
    this.disableText_account = (localStorage.getItem('currentProcedureText_account') === 'true');
    this.disablePayment = (localStorage.getItem('currentProcedurePayment') === 'true');
    this.disableDueDate = (localStorage.getItem('currentProcedureDueDate') === 'true');
    this.disableMailSender = (localStorage.getItem('currentProcedureMailSender') === 'true');
    this.disableMailWord = (localStorage.getItem('currentProcedureMailWord') === 'true');
    this.disableLinkTrans = (localStorage.getItem('currentProcedureLinkTrans') === 'true');
    this._preCalcService.returnAsObservable().subscribe((data: any) => {
      console.log(data);
      this.progress = data.progress;
      //TODO: if progress 100 close connection
      if (this.progress == 100) this._preCalcService.stopSSE();
      // this.changeDetectorRef.detectChanges(); 
    });
  }

  updateProcedureStatus() {
    if (this.disableAmount && this.disableCredit && this.disableDueDate &&
      this.disablePayment && this.disableText_account && this.disabletextWord
      && this.disableMailSender && this.disableMailWord && this.disableLinkTrans) {
      this._procedureService.patch({ id: this.prcId, status: 'CALCULATED' })
        .subscribe(res => localStorage.setItem('currentProcedureStatus', 'CALCULATED'));
    } else if (this.disableAmount || this.disableCredit || this.disableDueDate ||
      this.disablePayment || this.disableText_account || this.disabletextWord
      || this.disableMailSender || this.disableMailWord || this.disableLinkTrans) {
      this._procedureService.patch({ id: this.prcId, status: 'CALCULATED' })
        .subscribe(res => localStorage.setItem('currentProcedureStatus', 'PARTIAL_CALCULATED'));
    }
  }

  textByWordStart() {
    this.waiting = true;
    this._preCalcService.textAnalysisByWord(this.orgId, this.prcId)
      .subscribe(async (res) => {
        this.waiting = false;
        localStorage.setItem('currentProcedureText_word', 'true');
        this.disabletextWord = true;
        this._messageService.add({
          severity: 'success',
          summary: 'SUCCESS',
          life: 10000,
          detail: await this._translateService.get('general_messages.update_success').toPromise(),
        });
        this.updateProcedureStatus();
      }, er => this.waiting = false);
  }

  textByAccountStart() {
    this.waiting = true;
    this._preCalcService.textAnalysisByAccount(this.orgId, this.prcId)
      .subscribe(async (res) => {
        this.waiting = false;
        localStorage.setItem('currentProcedureText_account', 'true');
        this.disableText_account = true;
        this._messageService.add({
          severity: 'success',
          summary: 'SUCCESS',
          life: 10000,
          detail: await this._translateService.get('general_messages.update_success').toPromise(),
        });
        this.updateProcedureStatus();
      }, er => this.waiting = false);
  }


  amountStart() {
    this.waiting = true;
    this._preCalcService.amountAnalysis(this.orgId, this.prcId)
      .subscribe(async (res) => {
        this.waiting = false;
        localStorage.setItem('currentProcedureAmount', 'true');
        this.disableAmount = true;
        this._messageService.add({
          severity: 'success',
          summary: 'SUCCESS',
          life: 10000,
          detail: await this._translateService.get('general_messages.update_success').toPromise(),
        });
        this.updateProcedureStatus();
      }, er => this.waiting = false);
  }

  creditorStart() {
    this.waiting = true;
    this._preCalcService.creditorAnalysis(this.orgId, this.prcId)
      .subscribe(async (res) => {
        this.waiting = false;
        localStorage.setItem('currentProcedureCredit', 'true');
        this.disableCredit = true;
        this._messageService.add({
          severity: 'success',
          summary: 'SUCCESS',
          life: 10000,
          detail: await this._translateService.get('general_messages.update_success').toPromise(),
        });
        this.updateProcedureStatus();
      }, er => this.waiting = false);
  }

  paymentStart() {
    this.waiting = true;
    this._preCalcService.paymentAnalysis(this.orgId, this.prcId)
      .subscribe(async (res) => {
        this.waiting = false;
        localStorage.setItem('currentProcedurePayment', 'true');
        this.disablePayment = true;
        this._messageService.add({
          severity: 'success',
          summary: 'SUCCESS',
          life: 10000,
          detail: await this._translateService.get('general_messages.update_success').toPromise(),
        });
        this.updateProcedureStatus();
      }, er => this.waiting = false);
  }

  dueDateStart() {
    this.waiting = true;
    this._preCalcService.dueDateAnalysis(this.orgId, this.prcId)
      .subscribe(async (res) => {
        this.waiting = false;
        localStorage.setItem('currentProcedureDueDate', 'true');
        this.disableDueDate = true;
        this._messageService.add({
          severity: 'success',
          summary: 'SUCCESS',
          life: 10000,
          detail: await this._translateService.get('general_messages.update_success').toPromise(),
        });
        this.updateProcedureStatus();
      }, er => this.waiting = false);
  }

  mailByWordStart() {
    this.waiting = true;
    this._preCalcService.mailAnalysisByWord(this.orgId, this.prcId)
      .subscribe(async (res) => {
        this.waiting = false;
        localStorage.setItem('currentProcedureMailWord', 'true');
        this.disableMailWord = true;
        this._messageService.add({
          severity: 'success',
          summary: 'SUCCESS',
          life: 10000,
          detail: await this._translateService.get('general_messages.update_success').toPromise(),
        });
        this.updateProcedureStatus();
      }, er => this.waiting = false);
  }

  mailBySenderStart() {
    this.waiting = true;
    this._preCalcService.mailAnalysisBySender(this.orgId, this.prcId)
      .subscribe(async (res) => {
        this.waiting = false;
        localStorage.setItem('currentProcedureMailSender', 'true');
        this.disableMailSender = true;
        this._messageService.add({
          severity: 'success',
          summary: 'SUCCESS',
          life: 10000,
          detail: await this._translateService.get('general_messages.update_success').toPromise(),
        });
        this.updateProcedureStatus();
      }, er => this.waiting = false);
  }

  linkTransStart() {
    this.waiting = true;
    this._preCalcService.linkTransactions(this.orgId, this.prcId);
    // .subscribe(data => console.log(data));
    // .subscribe(async (res) => {
    //   console.log(res);
    //   switch (res.type) {
    //     case HttpEventType.Sent:
    //       console.log('Request has been made!');
    //       break;
    //     case HttpEventType.ResponseHeader:
    //       console.log('Response header has been received!');
    //       break;
    //     // case HttpEventType.UploadProgress:
    //     //   this.progress = Math.round(res.loaded / res.total * 100);
    //     //   this.progressElm.nativeElement.style.width = +this.progress + '%';
    //     //   this.cdRef.detectChanges();
    //     //   console.log(`Uploaded! ${this.progress}%`);
    //     //   break;
    //     case HttpEventType.Response:
    //       console.log('User successfully created!', res);
    //       break;
    //   } // end of switch
    //   this.waiting = false;
    //   // localStorage.setItem('currentProcedureLinkTrans', 'true');
    //   // this.disableLinkTrans = true;
    //   this._messageService.add({
    //     severity: 'success',
    //     summary: 'SUCCESS',
    //     life: 10000,
    //     detail: await this._translateService.get('general_messages.update_success').toPromise(),
    //   });
    //   this.updateProcedureStatus();
    // }, er => this.waiting = false);
  }


}
