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

  constructor(private _userService : UserService, private _router: Router) { }

  ngOnInit(): void {

    this._userService
    .getUsers(3)
    .subscribe(
      (data) => { 
        this.users = data.results ;
        console.log(this.users)
        },
      (error) => console.log(error),
      () => {  }
    );
  }
  edituser(id) {

    localStorage.setItem('procedureId', id);
    this._router.navigate(['/shared/user/edit']); 
  }
}