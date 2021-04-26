import { Component, OnInit } from '@angular/core';
import { UsersService } from "../service/users.service";
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
  cols = ["Procedures", "Users", "Username", "Email", "Firstname", "Lastname", "Title", "MobileNr"]
  
  constructor(private _usersService: UsersService ,private _organisationService: OrganisationService , private _router: Router) { }

  ngOnInit(): void {
    this._organisationService.get()
    .subscribe(
      (data) => { 
        this.organisations = data.results
        console.log(this.organisations)
        },
      (error) => console.log(error)
    );
  }
  showProcedures(id) {
    localStorage.setItem('organisationId', id);
    this._router.navigate(['/shared/user/procedures']);

  
  }
  showUsers(id) {
    localStorage.setItem('organisationId', id);
    this._router.navigate(['/shared/user/users']);
  
  }
}
