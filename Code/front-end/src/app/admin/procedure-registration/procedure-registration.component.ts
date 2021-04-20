import { Component, OnInit } from '@angular/core';
import { RoleServiceService } from "../service/role-service.service";
import { UsersService } from "../service/users.service";
import { ImportService } from "../service/import.service";
import { Procedures } from "../../model/procedures";
import { Choices } from "../../model/choices";
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-procedure-registration',
  templateUrl: './procedure-registration.component.html',
  styleUrls: ['./procedure-registration.component.sass']
})
export class ProcedureRegistrationComponent implements OnInit {

  managerRoleId ;
  managers: [] = [] ;
  dataSources: Choices[] = Choices.getDataSources();

  procedureModel: Procedures = {
    userId: 0,
    name: '',
    data: false,
    analysis: false,
    dataSource: '',

  };

  constructor(private _messageService: MessageService, private _roleServiceService : RoleServiceService, private _usersService: UsersService , private _importService: ImportService) { }
  ngOnInit(): void {
    
    // this._roleServiceService.getmanagerRoleId()
    // .subscribe(
    //   (data) => { 
    //     this.managerRoleId = data.id ;

    //     },
    //   (error) => console.log(error),
    //   () => {
        this._usersService.getManagers()
        .subscribe(
          (data) => { 
            const temp = data.results;
            temp.forEach(manager => {
              manager.fullName = manager.firstname + ' ' + manager.lastname;
              // delete manager.Role;
            });
            this.managers = temp;
            // debugger;
            // console.log(this.managers)
            },
          (error) => console.log(error)
        );
      // }
    // );

  }
  submitHandler(){
    this._importService.addProcedure(this.procedureModel)

     }
}
