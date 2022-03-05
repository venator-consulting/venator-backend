import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { DocumentTypes, PostingDocTypes } from 'src/app/shared/model/document-type';
import { Organisation } from 'src/app/shared/model/organisation';
import { Procedures } from 'src/app/shared/model/procedures';
import { OrganisationService } from '../service/organisation.service';
import { PostingService } from '../service/posting.service';

@Component({
  selector: 'app-document-type',
  templateUrl: './document-type.component.html',
  styleUrls: ['./document-type.component.sass']
})
export class DocumentTypeComponent implements OnInit {

  //#region vars init
  // organization list  
  orgs: Organisation[] = new Array();
  // procedures list
  procedures: Procedures[] = new Array();
  selectedOrgId: number = -1;
  selectedPrcId: number = -1;
  // procedure document types 
  postingDocTypes: PostingDocTypes[];
  // the all docuent types new to select one of them when update a record
  docTypes: DocumentTypes[] = new Array();
  // all document types new to select one of them in the filter in the table header
  docTypesFilter: DocumentTypes[] = new Array();
  // keep the original value of the document type for the editable record
  originalVal: number = -1;
  // table columns
  cols: { header, field }[] = new Array();

  // for filter
  // for progress bar
  searching: boolean;
  criteria: any = {};
  // save a temp version to reset it if the user clear all filters
  tempData: any[];
  filtersNo: number = 0;
  //#endregion vars init

  constructor(public _translateService: TranslateService, private _messageService: MessageService,
    private _orgService: OrganisationService, private _docTypesService: PostingService,
    private _confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.docTypes.push({
      id: 0,
      documentTypeName: 'null'
    });

    this._orgService.get()
      .subscribe(
        (data) => {
          this.orgs = data;
        },
        (error) => console.log(error)
      );

    this._docTypesService
      .getDocTypesEnum()
      .subscribe(
        (data) => {
          this.docTypes.push(...data);
          this.docTypesFilter = data;
        },
        (error) => console.log(error)
      );


    this.cols = [
      {
        header: 'Document_Type.documentType',
        field: 'documentType'
      },
      {
        header: 'Document_Type.documentTypeNewName',
        field: 'documentTypeNewName'
      }
    ];


  } // end of ng on init

  // when select a procedure get all document types for it
  prcChangedHandler(e) {
    if (e.value > 0) {
      this.searching = true;
      this._docTypesService
        .getPostingDocTypes(this.selectedOrgId, e.value)
        .subscribe(
          data => {
            this.postingDocTypes = data;
            this.tempData = data;
            this.searching = false;
          },
          error => this.searching = false
        );
    }
  }

  //#region edit record
  editRow(row) {
    this.postingDocTypes.filter(row => row.isEditable).map(r => { r.isEditable = false; return r });
    row.isEditable = true;
    this.originalVal = row.documentTypeNewId;
  }

  cancel(row) {
    row.documentTypeNewId = this.originalVal;
    row.documentTypeNewName = this.docTypes.filter(row => row.id == this.originalVal)[0]?.documentTypeName;
    row.isEditable = false;
  }


  save(row, update = true) {
    this.searching = true;
    this._docTypesService
      .updateNewDocType(this.selectedOrgId, this.selectedPrcId, row)
      .subscribe(res => {
        if (res == 1) localStorage.setItem('currentProcedureDocType', 'true');
        else if (res == 0) {
          let currentPrcID = localStorage.getItem('currentProcedureId');
          if (this.selectedPrcId == +currentPrcID) {
            localStorage.setItem('currentProcedureDueDate', 'false');
            localStorage.setItem('currentProcedurePayment', 'false');
            localStorage.setItem('currentProcedureCredit', 'false');
            localStorage.setItem('currentProcedureDocType', 'false');
            let prcStatus = localStorage.getItem('currentProcedureStatus');
            if (prcStatus === 'CALCULATED') localStorage.setItem('currentProcedureStatus', 'PARTIAL_CALCULATED');
          }
        }
        row.isEditable = false;
        localStorage.setItem('currentProcedureDocType', 'true');
        let numOfRecords = res.length > 0 ? res[0] : 0;
        this.searching = false;
        this._messageService.add({
          severity: 'success',
          summary: 'DONE!',
          detail: `Document new type is ${update ? 'updated' : 'Deleted'} successfully in the targeted posting data, \n ${numOfRecords} updated.`
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


  async reset(row) {
    this._confirmationService.confirm({
      message: await this._translateService.get('confirm_messages.body_delete').toPromise(),
      header: await this._translateService.get('confirm_messages.delete').toPromise(),
      icon: 'pi pi-info-circle',
      acceptLabel: await this._translateService.get('confirm_messages.yes').toPromise(),
      rejectLabel: await this._translateService.get('confirm_messages.cancel').toPromise(),
      accept: () => {
        row.documentTypeNewId = null;
        row.documentTypeNewName = null;
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

  docTypeChangedHandler(e, row) {
    row.documentTypeNewId = e.value;
    row.documentTypeNewName = this.docTypes.filter(row => row.id == e.value)[0].documentTypeName;
  }
  //#endregion edit record


  //#region filtering

  clearFilter() {
    this.criteria = {};
    this.postingDocTypes = [...this.tempData];
    this.filtersNo = 0;
  }


  async filterChange(query, colName) {
    this.searching = true;
    if (!query || !query?.toString()?.trim()) {
      this.filtersNo--;
      delete this.criteria[colName];
      if (Object.keys(this.criteria).length < 1) {
        this.postingDocTypes = [...this.tempData];
        this.filtersNo = 0;
      } else {
        for (const key in this.criteria) {
          if (Object.prototype.hasOwnProperty.call(this.criteria, key)) {
            const element = this.criteria[key];
            this.postingDocTypes = this.tempData.filter(value => value[key]?.toLowerCase().includes(element.toLowerCase()));
          }
        }
      }
    } else {
      this.filtersNo++;
      this.postingDocTypes = [...this.tempData];
      for (const key in this.criteria) {
        if (Object.prototype.hasOwnProperty.call(this.criteria, key)) {
          const element = this.criteria[key];
          this.postingDocTypes = this.postingDocTypes.filter(value => value[key]?.toString().toLowerCase().includes(element.toLowerCase()));
        }
      } // end of for each criteria field
    }
    this.searching = false;
  }
  //#endregion filtering

}
