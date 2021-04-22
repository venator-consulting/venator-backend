import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../service/users.service";
import { RoleServiceService } from "../../service/role-service.service";

@Component({
  selector: 'app-procedures',
  templateUrl: './procedures.component.html',
  styleUrls: ['./procedures.component.sass']
})
export class ProceduresComponent implements OnInit {

  constructor(private _usersService: UsersService , private _roleServiceService : RoleServiceService) { }

  managers: [] = []
  users: [] = []
  managerRoleId: number ;
  cols = [ "Username", "Email", "Firstname", "Lastname", "Title", "MobileNr"]
  selectedProcedures : [] = []

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

  showProcedures(userId) {
    this._usersService
    .getProcedures(userId)
    .subscribe(
      (data) => { 
        this.selectedProcedures = data ;
        },
      (error) => console.log(error),
      () => { 

       }
    );
  
  }
}
