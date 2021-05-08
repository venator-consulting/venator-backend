import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrganisationService } from  "../service/organisation.service";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.sass']
})
export class AdminDashboardComponent implements OnInit {

  organisations: [] = []
  users: [] = []
  organisationRoleId: number ;

  constructor(private _organisationService: OrganisationService , private _router: Router) { 
 
  }

  ngOnInit(): void {


    this._organisationService.get()
    .subscribe(
      (data) => { 
        this.organisations = data
        },
      (error) => console.log(error)
    );
  }
  showProcedures(id) {
    // console.log(id)
    localStorage.setItem('organisationId', id);
    this._router.navigate(['/shared/user/procedures']);

  
  }
  showUsers(id) {
    // console.log(id)
    localStorage.setItem('organisationId', id);
    this._router.navigate(['/shared/user/users']);
  
  }
}
