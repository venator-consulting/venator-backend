import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from "../service/user.service";

@Component({
  selector: 'app-organisation-users',
  templateUrl: './organisation-users.component.html',
  styleUrls: ['./organisation-users.component.sass']
})
export class OrganisationUsersComponent implements OnInit {

  organisationId = localStorage.getItem('organisationId')
  role = localStorage.getItem('role')
  users  : [] = [];
  cols = [];
  constructor(private _userService : UserService, private _router: Router) {
  }

  ngOnInit(): void {
    this._userService
    .getUsers(this.organisationId)
    .subscribe(
      (data) => { 
        this.users = data;
        // console.log(data)
        },
      (err) =>  { }
    );

    this.cols = [
      {
        header: 'User_Registration.role',
        field: "Role",
        subField: 'name'
      },
      {
        header: 'User_Registration.username',
        field: 'username'
      },
      {
        header: 'User_Registration.email',
        field: 'email'
      },
      {
        header: 'User_Registration.title',
        field: 'title'
      },
      {
        header: 'User_Registration.firstname',
        field: 'firstname'
      },
      {
        header: 'User_Registration.lastname',
        field: 'lastname'
      },
      {
        header: 'User_Registration.mobileNr',
        field: 'mobileNumber'
      },
      {
        header: 'User_Registration.street',
        field: 'street'
      },
      {
        header: 'User_Registration.houseNr',
        field: 'housenumber'
      },
      {
        header: 'User_Registration.postcode',
        field: 'postCode'
      },
      {
        header: 'User_Registration.city',
        field: 'city'
      },
      {
        header: 'User_Registration.country',
        field: 'country'
      }
    ];


  } // end of ng on init


  edituser(user) {
    localStorage.setItem('selectedUser_userId', user.id);
    localStorage.setItem('selectedUser_roleId', user.RoleId);
    localStorage.setItem('selectedUser_username', user.username);
    localStorage.setItem('selectedUser_email', user.email);
    localStorage.setItem('selectedUser_title', user.title);
    localStorage.setItem('selectedUser_firstname', user.firstname);
    localStorage.setItem('selectedUser_lastname', user.lastname);
    localStorage.setItem('selectedUser_mobileNr', user.mobileNumber);
    localStorage.setItem('selectedUser_street', user.street);
    localStorage.setItem('selectedUser_houseNr', user.housenumber);
    localStorage.setItem('selectedUser_postcode', user.postCode);
    localStorage.setItem('selectedUser_city', user.city);
    localStorage.setItem('selectedUser_country', user.country);

    this._router.navigate(['/dashboard/shared/user/edit']); 
  }
  addUser(){
    this._router.navigate(['/dashboard/shared/user/add']); 

  }
}
