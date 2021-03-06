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
  cols: { header, field }[] = new Array();
  check = '<i class="pi pi-check checkIcon"></i>';

  constructor(private _userService: UserService, private _router: Router) { }

  ngOnInit(): void {
    this._userService
      .getProcedures(this.organisationId)
      .subscribe(
        (data) => {
          this.procedures = data;
          // console.log(this.organisationId)
          // console.log(data)
        },
        (error) => console.log(error),
        () => { }
      );

      this.cols = [
        {
          header: 'Procedure_Registration.name',
          field: 'name'
        },
        {
          header: 'Procedure_Registration.datasource',
          field: 'dataSource'
        },
        {
          header: 'Procedure_Registration.data',
          field: 'data'
        },
        {
          header: 'Procedure_Registration.analysis',
          field: 'analysis'
        },
      ];

    
  } // end of ng on init



  dataTable(prc) {
    localStorage.setItem('currentProcedureId', prc.id);
    localStorage.setItem('currentProcedureName', prc.name);
    this._router.navigate(['/shared/data']);

  }
  editProcedure(id, name, data, analysis) {
    localStorage.setItem('currentProcedureId', id);
    localStorage.setItem('currentProcedureName', name);
    localStorage.setItem('currentProcedureData', data);
    localStorage.setItem('currentProcedureAnalysis', analysis);

    this._router.navigate(['/admin/procedure/edit']);

  }
  addProcedure() {
    this._router.navigate(['/admin/procedure/add']);

  }
}
