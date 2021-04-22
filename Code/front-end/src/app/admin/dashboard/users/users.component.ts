import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../service/users.service";
import { RoleServiceService } from "../../service/role-service.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {

  managers: [] = []
  users: [] = []
  managerRoleId: number ;
  cols = [ "Username", "Email","Title",  "Firstname", "Lastname", "MobileNr"]

  constructor(private _usersService: UsersService , private _roleServiceService : RoleServiceService) { }

  ngOnInit(): void {
    
         this._usersService.getManagers()
        .subscribe(
          (data) => { 
            this.managers = data.results
            console.log(this.managers)
            },
          (error) => console.log(error)
        );


  }

}
