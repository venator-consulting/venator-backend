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

  orgs: Organisation[] = new Array();
  procedures: Procedures[] = new Array();
  selectedOrgId: number = -1;
  selectedPrcId: number = -1;
  postingAccountTypes: PostingAccountTypes[];
  accountTypes: AccountTypes[] = new Array();
  accountTypesFilter: AccountTypes[] = new Array();
  originalVal: number = -1;
  cols: { header, field, align }[] = new Array();
  procedureName: string;

  // for filter
  searching: boolean;
  criteria: any = {};
  tempData: any[];
  filtersNo: number = 0;

  constructor(public _translateService: TranslateService, private _messageService: MessageService,
    private _postingService: PostingService, private _orgService: OrganisationService,
    private _confirmationService: ConfirmationService) { }

  ngOnInit(): void {

    this.accountTypes.push({
      id: 0,
      AccountTypeName: 'null'
    });

    this._orgService.get()
      .subscribe(
        (data) => {
          this.orgs = data;
        },
        (error) => console.log(error)
      );

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

  prcChangedHandler(e) {
    if (e.value > 0) {
      this.searching = true;
      this._postingService
        .getPostingAccountTypes(this.selectedOrgId, this.selectedPrcId)
        .subscribe(
          data => {
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

  editRow(row) {
    this.postingAccountTypes.filter(row => row.isEditable).map(r => { r.isEditable = false; return r });
    row.isEditable = true;
    this.originalVal = row.accountTypeNewId;
  }

  cancel(row) {
    row.accountTypeNewId = this.originalVal;
    row.accountTypeNewName = this.accountTypes.filter(row => row.id == this.originalVal)[0]?.AccountTypeName;
    row.isEditable = false;
  }


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
          detail: `Account new type is ${update? 'updated' : 'Deleted'} successfully in the targeted posting data, \n ${numOfRecords} updated.`
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


  accountTypeChangedHandler(e, row) {
    row.accountTypeNewId = e.value;
    row.accountTypeNewName = this.accountTypes.filter(row => row.id == e.value)[0].AccountTypeName;
  }


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


}
