import { Component, OnInit } from '@angular/core';
import { UserService } from "../service/user.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.sass']
})
export class UserDashboardComponent implements OnInit {

  organisationId = localStorage.getItem('organisationId')
  role = localStorage.getItem('role')
  procedures: [] = [];
  cols: { header, field , align}[] = new Array();
  check = '<i class="pi pi-check checkIcon"></i>';

  constructor(private _userService: UserService, private _router: Router) { }

  ngOnInit(): void {
    this._userService
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
    localStorage.setItem('currentProcedureStatus', prc.status);
    localStorage.setItem('currentProcedureAmount', prc.amount);
    localStorage.setItem('currentProcedureCredit', prc.credit);
    localStorage.setItem('currentProcedurePayment', prc.payment);
    localStorage.setItem('currentProcedureText_word', prc.text_word);
    localStorage.setItem('currentProcedureText_account', prc.text_account);
    localStorage.setItem('currentProcedureData', prc.data);
    localStorage.setItem('currentProcedureAnalysis', prc.analysis);
    this._router.navigate(['/dashboard/shared/data']);

  }
  editProcedure(prc) {
    localStorage.setItem('currentProcedureId', prc.id);
    localStorage.setItem('currentProcedureName', prc.name);
    localStorage.setItem('currentProcedureData', prc.data);
    localStorage.setItem('currentProcedureAnalysis', prc.analysis);
    localStorage.setItem('currentProcedureStatus', prc.status);
    localStorage.setItem('currentProcedureAmount', prc.amount);
    localStorage.setItem('currentProcedureCredit', prc.credit);
    localStorage.setItem('currentProcedurePayment', prc.payment);
    localStorage.setItem('currentProcedureText_word', prc.text_word);
    localStorage.setItem('currentProcedureText_account', prc.text_account);

    this._router.navigate(['/dashboard/admin/procedure/edit']);

  }
  addProcedure() {
    this._router.navigate(['/dashboard/admin/procedure/add']);

  }
}
