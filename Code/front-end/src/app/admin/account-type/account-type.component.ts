import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { AccountTypes, PostingAccountTypes } from 'src/app/shared/model/accountType';
import { Organisation } from 'src/app/shared/model/organisation';
import { Procedures } from 'src/app/shared/model/procedures';
import { OrganisationService } from '../service/organisation.service';
import { PostingService } from '../service/posting.service';

@Component({
  selector: 'app-account-type',
  templateUrl: './account-type.component.html',
  styleUrls: ['./account-type.component.sass']
})
export class AccountTypeComponent implements OnInit {

  //#region vars init
  // list of orgainizations to select on of them in dropdown
  orgs: Organisation[] = new Array();
  // list of procedures to select one of them in dropdown
  procedures: Procedures[] = new Array();
  // selecected organazation ID will get it from the local storage
  selectedOrgId: number = -1;
  // selected procedure ID will get it from the local storage
  selectedPrcId: number = -1;
  // accaount types list for the selected procedure
  postingAccountTypes: PostingAccountTypes[];
  // all possible accout new types to select from in the dropdown to edit records
  accountTypes: AccountTypes[] = new Array();
  // all possible accaount types to select from in the dropdown filter in the header of the table
  accountTypesFilter: AccountTypes[] = new Array();
  // to save the original value after edit a record, if the user cancel the operation then 
  // we return it to the original value
  originalVal: number = -1;
  // the columns of the table
  cols: { header, field, align }[] = new Array();

  // for progress bar
  searching: boolean;
  // for filter
  criteria: any = {};
  // to save the original data if the user clear the filters
  tempData: any[];
  // number of filters
  filtersNo: number = 0;
  //#endregion vars init

  //#region Constructor
  constructor(public _translateService: TranslateService, private _messageService: MessageService,
    private _postingService: PostingService, private _orgService: OrganisationService,
    private _confirmationService: ConfirmationService) { }
  //#endregion Constructor


  ngOnInit(): void {

    // set a defaut value for accounts dropdown
    this.accountTypes.push({ id: 0, AccountTypeName: 'null' });

    // get organizations
    this._orgService.get()
      .subscribe(
        (data) => {
          this.orgs = data;
        },
        (error) => console.log(error)
      );

    // get all account types options
    this._postingService
      .getAccountTypesEnum()
      .subscribe(
        (data) => {
          this.accountTypes.push(...data);
          this.accountTypesFilter = data;
        },
        (error) => console.log(error)
      );

    this.cols = [
      {
        header: 'Account_Type.accountNumber',
        field: 'accountNumber',
        align: 'left'
      },
      {
        header: 'Account_Type.accountName',
        field: 'accountName',
        align: 'left'
      },
      {
        header: 'Account_Type.accountType',
        field: 'accountType',
        align: 'left'
      },
      {
        header: 'Account_Type.accountTypeNewName',
        field: 'accountTypeNewName',
        align: 'left'
      }
    ];


  } // end of ng on init


  // get procedures for selected organization
  orgChangedHandler(e) {
    this.selectedPrcId = 0;
    if (e.value > 0) {
      this._orgService.getProcedures(e.value)
        .subscribe(
          data => {
            this.procedures = data;
          },
          error => console.log(error)
        );
    }
  }

  // get data fot srlected procedure
  prcChangedHandler(e) {
    if (e.value > 0) {
      this.searching = true;
      this._postingService
        .getPostingAccountTypes(this.selectedOrgId, this.selectedPrcId)
        .subscribe(
          data => {
            // parse accaount numbers for sorting
            data.forEach(account => {
              let accountNumber = parseInt(account.accountNumber.toString(), 10);
              account.accountNumber = isNaN(accountNumber) ? account.accountNumber : accountNumber;
            });
            this.postingAccountTypes = data;
            this.tempData = data;
            this.searching = false;
          },
          error => this.searching = false
        );
    }
  }

  //#region edit record
  // set the record as the edit mode
  editRow(row) {
    this.postingAccountTypes.filter(row => row.isEditable).map(r => { r.isEditable = false; return r });
    row.isEditable = true;
    this.originalVal = row.accountTypeNewId;
  }

  // cancel edit mode
  cancel(row) {
    row.accountTypeNewId = this.originalVal;
    row.accountTypeNewName = this.accountTypes.filter(row => row.id == this.originalVal)[0]?.AccountTypeName;
    row.isEditable = false;
  }

  // save changes and exit the edit mode
  save(row, update = true) {
    this.searching = true;
    this._postingService
      .updateNewAccountType(this.selectedOrgId, this.selectedPrcId, row)
      .subscribe(res => {
        row.isEditable = false;
        let numOfRecords = res.length > 0 ? res[0] : 0;
        this.searching = false;
        this._messageService.add({
          severity: 'success',
          summary: 'DONE!',
          detail: `Account new type is ${update ? 'updated' : 'Deleted'} successfully in the targeted posting data, \n ${numOfRecords} updated.`
        });
      }, er => {
        this.searching = false;
        this._messageService.add({
          severity: 'error',
          summary: 'ERROR!',
          detail: er.error.error
        });
      });
  }

  // change the account type for a record
  accountTypeChangedHandler(e, row) {
    row.accountTypeNewId = e.value;
    row.accountTypeNewName = this.accountTypes.filter(row => row.id == e.value)[0].AccountTypeName;
  }

  // delete account type for a record
  async reset(row) {
    this._confirmationService.confirm({
      message: await this._translateService.get('confirm_messages.body_delete').toPromise(),
      header: await this._translateService.get('confirm_messages.delete').toPromise(),
      icon: 'pi pi-info-circle',
      acceptLabel: await this._translateService.get('confirm_messages.yes').toPromise(),
      rejectLabel: await this._translateService.get('confirm_messages.cancel').toPromise(),
      accept: () => {
        row.accountTypeNewId = null;
        row.accountTypeNewName = null;
        this.save(row, false);
      },
      reject: async (type) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this._messageService.add({
              severity: 'info',
              summary: await this._translateService.get('general_messages.canceled').toPromise(),
              // detail: 'Action cancelled'
            });
            break;
          case ConfirmEventType.CANCEL:
            this._messageService.add({
              severity: 'info',
              summary: await this._translateService.get('general_messages.canceled').toPromise(),
              // detail: 'Action cancelled' 
            });
            break;
        }
      }
    });
  }
  //#endregion edit record

  //#region filtering
  clearFilter() {
    this.criteria = {};
    this.postingAccountTypes = [...this.tempData];
    this.filtersNo = 0;
  }

  filterChange(query, colName): void {
    this.searching = true;
    if (!query || !query?.toString()?.trim()) {
      this.filtersNo--;
      delete this.criteria[colName];
      if (Object.keys(this.criteria).length < 1) {
        this.postingAccountTypes = [...this.tempData];
        this.filtersNo = 0;
      } else {
        for (const key in this.criteria) {
          if (Object.prototype.hasOwnProperty.call(this.criteria, key)) {
            const element = this.criteria[key];
            if (element.length < 3) {
              this.postingAccountTypes = this.tempData.filter(value => value[key]?.toLowerCase() == element.toLowerCase());
            } else {
              this.postingAccountTypes = this.tempData.filter(value => value[key]?.toLowerCase().includes(element.toLowerCase()));
            }
          }
        }
      }
    } else {
      this.filtersNo++;
      this.postingAccountTypes = [...this.tempData];
      for (const key in this.criteria) {
        if (Object.prototype.hasOwnProperty.call(this.criteria, key)) {
          const element = this.criteria[key];
          if (element.length < 3) {
            this.postingAccountTypes = this.postingAccountTypes.filter(value => value[key]?.toString().toLowerCase() == element.toLowerCase());
          } else {
            this.postingAccountTypes = this.postingAccountTypes.filter(value => value[key]?.toString().toLowerCase().includes(element.toLowerCase()));
          }
        }
      } // end of for each criteria field
    }
    this.searching = false;
  }
  //#endregion filtering

}
