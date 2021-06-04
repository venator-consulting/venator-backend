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
      (error) => console.log(error),
      () => { }
    );
  }
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

    this._router.navigate(['/shared/user/edit']); 
  }
  addUser(){
    this._router.navigate(['/shared/user/add']); 

  }
}
