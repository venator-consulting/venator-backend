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
  //#region vars init
  // organiization id, will get it from local storage
  orgId: number;
  // selected procecdure id, will get it from local storage
  prcId: number;
  // for progress bar (just spinning)
  waiting: boolean;
  // if true will disable the button which calculate amount analysis
  disableAmount: boolean;
  // if true will disable the button which calculate creditor analysis
  disableCredit: boolean;
  // if true will disable the button which calculate text by word analysis analysis
  disabletextWord: boolean;
  // if true will disable the button which calculate text by acocunt analysis
  disableText_account: boolean;
  // if true will disable the button which calculate payment analysis
  disablePayment: boolean;
  // if true will disable the button which calculate due date analysis
  disableDueDate: boolean;
  // if true will disable the button which calculate document type analysis
  disableDocType: boolean;
  disableMailAttachment: boolean;
  // if true will disable the button which calculate mail analysis by sender
  disableMailSender: boolean;
  // if true will disable the button which calculate mail by word analysis
  disableMailWord: boolean;
  // if true will disable the button which calculate link transactions (record matching)
  disableLinkTrans: boolean;
  // for progress bar for text by word analysis
  progress = 0;
  // for progress bar for amount analysis
  amountProgress = 0;
  // for progress bar for amount analysis
  paymentProgress = 0;
  // for progress bar for due date analysis
  dueDateProgress = 0;
  // for progress bar for creditor analysis
  creditorProgress = 0;
  // for progress bar for text by account analysis
  textAccountProgress = 0;
  // for progress bar of email attachment 
  mailAttachmentProgress = 0;
  // for progress bar for mail analysis by sender
  mailSenderProgress = 0;
  // for progress bar for mail analysis by word
  mailWordProgress = 0;
  //#endregion vars init

  constructor(private _preCalcService: PreCalculateService, private _messageService: MessageService,
    private _procedureService: ProcedureService, private _translateService: TranslateService) { }

  ngOnInit(): void {
    // get organization id
    this.orgId = +localStorage.getItem('organisationId');
    // get procedure id
    this.prcId = +localStorage.getItem('currentProcedureId');
    // check if doctype button disabled
    this.disableDocType = (localStorage.getItem('currentProcedureDocType') !== 'true');
    // check if amount button should be disabled
    this.disableAmount = (localStorage.getItem('currentProcedureAmount') === 'true');
    this.disableCredit = (localStorage.getItem('currentProcedureCredit') === 'true');
    this.disabletextWord = (localStorage.getItem('currentProcedureText_word') === 'true');
    this.disableText_account = (localStorage.getItem('currentProcedureText_account') === 'true');
    this.disablePayment = (localStorage.getItem('currentProcedurePayment') === 'true');
    this.disableDueDate = (localStorage.getItem('currentProcedureDueDate') === 'true');
    this.disableMailSender = (localStorage.getItem('currentProcedureMailSender') === 'true');
    this.disableMailWord = (localStorage.getItem('currentProcedureMailWord') === 'true');
    this.disableLinkTrans = (localStorage.getItem('currentProcedureLinkTrans') === 'true');
    this.disableMailAttachment = (localStorage.getItem('currentProcedureMailAttachment') === 'true');
  }

  /**
   * set the procedure status in localstorage
   */
  updateProcedureStatus() {
    if (this.disableAmount && this.disableCredit && this.disableDueDate &&
      this.disablePayment && this.disableText_account && this.disabletextWord
      && this.disableMailSender && this.disableMailWord && this.disableLinkTrans) {
      this._procedureService.patch({ id: this.prcId, status: 'CALCULATED' })
        .subscribe(res => localStorage.setItem('currentProcedureStatus', 'CALCULATED'));
    } else if (this.disableAmount || this.disableCredit || this.disableDueDate ||
      this.disablePayment || this.disableText_account || this.disabletextWord
      || this.disableMailSender || this.disableMailWord || this.disableLinkTrans ||
      this.disableMailAttachment) {
      this._procedureService.patch({ id: this.prcId, status: 'CALCULATED' })
        .subscribe(res => localStorage.setItem('currentProcedureStatus', 'PARTIAL_CALCULATED'));
    }
  }

  textByWordStart() {
    this.waiting = true;
    this._preCalcService.textAnalysisByWord(this.orgId, this.prcId)
      .subscribe(async (data: any) => {
        console.log(data);
        this.progress = data.progress;
        if (this.progress >= 100) {
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
        }
      }, er => this.waiting = false);
  }

  textByAccountStart() {
    this.waiting = true;
    this._preCalcService.textAnalysisByAccount(this.orgId, this.prcId)
      .subscribe(async (data: any) => {
        console.log(data);
        this.textAccountProgress = data.progress;
        if (this.textAccountProgress >= 100) {
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
        }
      }, er => this.waiting = false);

  }


  amountStart() {
    this.waiting = true;
    this._preCalcService.amountAnalysis(this.orgId, this.prcId)
      .subscribe(async (data: any) => {
        console.log(data);
        this.amountProgress = data.progress;
        if (this.amountProgress >= 100) {
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
        }
      }, er => this.waiting = false);
  }

  creditorStart() {
    this.waiting = true;
    this._preCalcService.creditorAnalysis(this.orgId, this.prcId)
      .subscribe(async (data: any) => {
        console.log(data);
        this.creditorProgress = data.progress;
        if (this.creditorProgress >= 100) {
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
        }
      }, er => this.waiting = false);
  }

  paymentStart() {
    this.waiting = true;
    this._preCalcService.paymentAnalysis(this.orgId, this.prcId)
      .subscribe(async (data: any) => {
        console.log(data);
        this.paymentProgress = data.progress;
        if (this.paymentProgress >= 100) {
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
        }
      }, er => this.waiting = false);
  }

  dueDateStart() {
    this.waiting = true;
    this._preCalcService.dueDateAnalysis(this.orgId, this.prcId)
      .subscribe(async (data: any) => {
        console.log(data);
        this.dueDateProgress = data.progress;
        if (this.dueDateProgress >= 100) {
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
        }
      }, er => this.waiting = false);
  }

  mailAttachmentStart() {
    this.waiting = true;
    this._preCalcService.mailAttachmentAnalysis(this.orgId, this.prcId)
      .subscribe(async (data: any) => {
        console.log(data);
        this.mailAttachmentProgress = data.progress;
        if (this.mailAttachmentProgress >= 100) {
          this.waiting = false;
          localStorage.setItem('currentProcedureMailAttachment', 'true');
          this.disableMailAttachment = true;
          this._messageService.add({
            severity: 'success',
            summary: 'SUCCESS',
            life: 10000,
            detail: await this._translateService.get('general_messages.update_success').toPromise(),
          });
          this.updateProcedureStatus();
        }
      }, er => this.waiting = false);
  }

  mailByWordStart() {
    this.waiting = true;
    this._preCalcService.mailAnalysisByWord(this.orgId, this.prcId)
      .subscribe(async (data: any) => {
        this.mailWordProgress = data.progress;
        if (this.mailWordProgress >= 100) {
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
        }
      }, er => this.waiting = false);
  }

  mailBySenderStart() {
    this.waiting = true;
    this._preCalcService.mailAnalysisBySender(this.orgId, this.prcId)
      .subscribe(async (data: any) => {
        console.log(data);
        this.mailSenderProgress = data.progress;
        if (this.mailSenderProgress >= 100) {
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
        }
      }, er => this.waiting = false);
  }

  linkTransStart() {
    this.waiting = true;
    this._preCalcService.linkTransactions(this.orgId, this.prcId);
  }


}
