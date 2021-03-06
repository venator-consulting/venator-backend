import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { AccountTypes, PostingAccountTypes } from 'src/app/shared/model/accountType';
import { PostingService } from '../service/posting.service';

@Component({
  selector: 'app-account-type',
  templateUrl: './account-type.component.html',
  styleUrls: ['./account-type.component.sass']
})
export class AccountTypeComponent implements OnInit {

  selectedOrgId: number = -1;
  selectedPrcId: number = -1;
  postingAccountTypes: PostingAccountTypes[];
  accountTypes: AccountTypes[] = new Array();
  originalVal: number = -1;
  cols: { header, field }[] = new Array();
  procedureName: string;

  constructor(public _translateService: TranslateService, private _messageService: MessageService,
    private _postingService: PostingService) { }

  ngOnInit(): void {

    this.selectedOrgId = +localStorage.getItem('organisationId');
    this.selectedPrcId = +localStorage.getItem('currentProcedureId');
    this.procedureName = localStorage.getItem('currentProcedureName');

    this.accountTypes.push({
      id: 0,
      AccountTypeName: 'null'
    });

    this._postingService
      .getAccountTypesEnum()
      .subscribe(
        (data) => {
          this.accountTypes.push(...data);
        },
        (error) => console.log(error)
      );

    this._postingService
      .getPostingAccountTypes(this.selectedOrgId, this.selectedPrcId)
      .subscribe(
        data => {
          this.postingAccountTypes = data;
        },
        error => console.log(error)
      );


    this.cols = [
      {
        header: 'Account_Type.accountType',
        field: 'accountType'
      },
      {
        header: 'Account_Type.accountTypeNewName',
        field: 'accountTypeNewName'
      }
    ];


  } // end of ng on init


  editRow(row) {
    this.postingAccountTypes.filter(row => row.isEditable).map(r => { r.isEditable = false; return r });
    row.isEditable = true;
    // debugger;
    this.originalVal = row.accountTypeNewId;
  }

  cancel(row) {
    row.accountTypeNewId = this.originalVal;
    row.accountTypeNewName = this.accountTypes.filter(row => row.id == this.originalVal)[0]?.AccountTypeName;
    row.isEditable = false;
  }


  save(row) {
    
    this._postingService
      .updateNewAccountType(this.selectedOrgId, this.selectedPrcId, row)
      .subscribe(res => {
        row.isEditable = false;
        let numOfRecords = res.length > 0 ? res[0] : 0;

        this._messageService.add({
          severity: 'success',
          summary: 'DONE!',
          detail: `Account new type is updated successfully in the targeted posting data, \n ${numOfRecords} updated.`
        });
      }, er => {
        this._messageService.add({
          severity: 'error',
          summary: 'ERROR!',
          detail: er.error.error
        });
      });
  }


  accountTypeChangedHandler(e, row) {
    row.accountTypeNewId = e.value;
    row.accountTypeNewName = this.accountTypes.filter(row => row.id == e.value)[0].AccountTypeName;
  }



}
