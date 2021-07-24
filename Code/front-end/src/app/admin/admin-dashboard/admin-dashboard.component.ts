import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Header } from 'primeng/api';
import { OrganisationService } from "../service/organisation.service";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.sass']
})
export class AdminDashboardComponent implements OnInit {

  organisations: [] = []
  users: [] = []
  organisationRoleId: number;
  cols: { header, field , align}[] = new Array();

  constructor(private _organisationService: OrganisationService, private _router: Router) {

  }

  ngOnInit(): void {


    this._organisationService.get()
      .subscribe(
        (data) => {
          this.organisations = data
        },
        (error) => console.log(error)
      );

    this.cols = [
      {
        header: 'Admin_Dashboard.organisationName',
        field: 'name',
        align: 'left'
      },
      {
        header: 'Admin_Dashboard.organisationEmail',
        field: 'email',
        align: 'left'
      },
      {
        header: 'Admin_Dashboard.organisationCountry',
        field: 'country',
        align: 'left'
      },
      {
        header: 'Admin_Dashboard.organisationCity',
        field: 'city',
        align: 'left'
      },
      {
        header: 'Admin_Dashboard.organisationPostCode',
        field: 'postCode',
        align: 'left'
      },
      {
        header: 'Admin_Dashboard.organisationStreet',
        field: 'street',
        align: 'left'
      },
      {
        header: 'Admin_Dashboard.organisationHouseNr',
        field: 'houseNr',
        align: 'left'
      }

    ];

  } // end of ng on init


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

  editOrg(id) {
    this._router.navigate(['/admin/organisation/edit/' + id]);
  }


}
