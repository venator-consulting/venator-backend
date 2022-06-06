import { Component, OnInit } from '@angular/core';
import { UserService } from "../service/user.service";
import { Router } from '@angular/router';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { ProcedureService } from '../service/procedure.service';
import { TranslateService } from '@ngx-translate/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.sass']
})
export class UserDashboardComponent implements OnInit {

  organisationId = localStorage.getItem('organisationId');
  role = localStorage.getItem('role');
  procedures: [] = [];
  cols: { header, field, align }[] = new Array();
  check = '<i class="pi pi-check checkIcon"></i>';

  constructor(private _translateService: TranslateService, private _router: Router, private _procedureService: ProcedureService,
    private _confirmationService: ConfirmationService, private _messageService: MessageService,
    private navbar: NavBarComponent) { }

  ngOnInit(): void {
    this._procedureService
      .getProcedures(this.organisationId)
      .subscribe(
        (data) => {
          this.procedures = data;

        },
        (error) => console.log(error),
        () => { }
      );

    this.cols = [
      {
        header: 'Procedure_Registration.name',
        field: 'name',
        align: 'left'
      },
      {
        header: 'Procedure_Registration.datasource',
        field: 'dataSource',
        align: 'center'
      },
      {
        header: 'Procedure_Registration.data',
        field: 'data',
        align: 'center'
      },
      {
        header: 'Procedure_Registration.analysis',
        field: 'analysis',
        align: 'center'
      },
      {
        header: 'Procedure_Registration.status',
        field: 'status',
        align: 'center'
      },
    ];


  } // end of ng on init



  dataTable(prc) {
    localStorage.setItem('currentProcedureId', prc.id);
    localStorage.setItem('currentProcedureName', prc.name);
    localStorage.setItem('currentProcedureData', prc.data);
    localStorage.setItem('currentProcedureAnalysis', prc.analysis);
    localStorage.setItem('currentProcedureStatus', prc.status);
    localStorage.setItem('currentProcedureAmount', prc.amount);
    localStorage.setItem('currentProcedureText_word', prc.text_word);
    localStorage.setItem('currentProcedureText_account', prc.text_account);
    localStorage.setItem('currentProcedureCredit', prc.credit);
    localStorage.setItem('currentProcedurePayment', prc.payment);
    localStorage.setItem('currentProcedureDueDate', prc.due_date);
    localStorage.setItem('currentProcedureLiquidity', prc.liquidity);
    localStorage.setItem('currentProcedureDocType', prc.docType);
    localStorage.setItem('currentProcedureMailSender', prc.emailSender);
    localStorage.setItem('currentProcedureMailWord', prc.emailWord);
    localStorage.setItem('currentProcedureMailAttachment', prc.emailAttach);
    this.navbar.updateLocal();
    this._router.navigate(['/dashboard/shared/data']);

  }
  editProcedure(prc) {
    localStorage.setItem('currentProcedureId', prc.id);
    localStorage.setItem('currentProcedureName', prc.name);
    localStorage.setItem('currentProcedureData', prc.data);
    localStorage.setItem('currentProcedureAnalysis', prc.analysis);
    localStorage.setItem('currentProcedureStatus', prc.status);
    localStorage.setItem('currentProcedureAmount', prc.amount);
    localStorage.setItem('currentProcedureText_word', prc.text_word);
    localStorage.setItem('currentProcedureText_account', prc.text_account);
    localStorage.setItem('currentProcedureCredit', prc.credit);
    localStorage.setItem('currentProcedurePayment', prc.payment);
    localStorage.setItem('currentProcedureDueDate', prc.due_date);
    localStorage.setItem('currentProcedureLiquidity', prc.liquidity);
    localStorage.setItem('currentProcedureDocType', prc.docType);
    localStorage.setItem('currentProcedureMailSender', prc.emailSender);
    localStorage.setItem('currentProcedureMailWord', prc.emailWord);
    localStorage.setItem('currentProcedureMailAttachment', prc.emailAttach);
    this.navbar.updateLocal();
    this._router.navigate(['/dashboard/admin/procedure/edit']);

  }
  addProcedure() {
    this._router.navigate(['/dashboard/admin/procedure/add']);
  }

  async reset(prc) {
    this._confirmationService.confirm({
      message: await this._translateService.get('confirm_messages.body_delete').toPromise(),
      header: await this._translateService.get('confirm_messages.delete').toPromise(),
      icon: 'pi pi-info-circle',
      acceptLabel: await this._translateService.get('confirm_messages.yes').toPromise(),
      rejectLabel: await this._translateService.get('confirm_messages.cancel').toPromise(),
      accept: () => {
        this._procedureService.reset(this.organisationId, prc.id)
          .subscribe(async (res) => {
            prc.status = 'NOT_IMPORTED';
            localStorage.setItem('currentProcedureAnalysis', null);
            localStorage.setItem('currentProcedureStatus', 'NOT_IMPORTED');
            localStorage.setItem('currentProcedureAmount', null);
            localStorage.setItem('currentProcedureText_word', null);
            localStorage.setItem('currentProcedureText_account', null);
            localStorage.setItem('currentProcedureCredit', null);
            localStorage.setItem('currentProcedurePayment', null);
            localStorage.setItem('currentProcedureDueDate', null);
            localStorage.setItem('currentProcedureLiquidity', null);
            localStorage.setItem('currentProcedureDocType', null);
            localStorage.setItem('currentProcedureMailSender', null);
            localStorage.setItem('currentProcedureMailWord', null);
            localStorage.setItem('currentProcedureMailAttachment', null);
            this._messageService.add({
              severity: 'info',
              summary: await this._translateService.get('general_messages.delete_success').toPromise(),
              detail: await this._translateService.get('general_messages.delete_success').toPromise()
            });
          });
      },
      reject: async (type) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this._messageService.add({
              severity: 'info',
              summary: await this._translateService.get('general_messages.canceled').toPromise(),
              // detail: 'Action cancelled' 
            });
            break;
          case ConfirmEventType.CANCEL:
            this._messageService.add({
              severity: 'info',
              summary: await this._translateService.get('general_messages.canceled').toPromise(),
              // detail: 'Action cancelled' 
            });
            break;
        }
      }
    });
  }
}
