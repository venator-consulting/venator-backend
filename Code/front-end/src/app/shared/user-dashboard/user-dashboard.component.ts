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
  procedures  : [] = [];

  constructor(private _userService : UserService, private _router: Router) { }

  ngOnInit(): void {
    this._userService
    .getProcedures(3)
    .subscribe(
      (data) => { 
        this.procedures = data ;
        console.log(data)
        },
      (error) => console.log(error),
      () => {  }
    );
  }
  dataTable(id) {

  }
  editProcedure(id,name,data,analysis) {
    localStorage.setItem('currentProcedureId', id);
    localStorage.setItem('currentProcedureName', name);
    localStorage.setItem('currentProcedureData', data);
    localStorage.setItem('currentProcedureAnalysis', analysis);

   this._router.navigate(['/admin/procedure/edit']); 

  }
}