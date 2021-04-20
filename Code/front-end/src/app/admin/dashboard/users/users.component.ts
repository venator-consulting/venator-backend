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
  cols = [ "Username", "Email", "Firstname", "Lastname", "Title", "MobileNr"]

  constructor(private _usersService: UsersService , private _roleServiceService : RoleServiceService) { }

  ngOnInit(): void {
    
    // this._roleServiceService.getmanagerRoleId()
    // .subscribe(
    //   (data) => { 
    //     this.managerRoleId = data.id ;
    //     console.log(this.managerRoleId)
    //     },
    //   (error) => console.log(error),
    //   () => {
         this._usersService.getManagers()
        .subscribe(
          (data) => { 
            this.managers = data.results
            console.log(this.managers)
            },
          (error) => console.log(error)
        );
    //   }
    // );

  }

}
