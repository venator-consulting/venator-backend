import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
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

  orgs: Organisation[] = new Array();
  procedures: Procedures[] = new Array();
  selectedOrgId: number = -1;
  selectedPrcId: number = -1;
  postingDocTypes: PostingDocTypes[];
  docTypes: DocumentTypes[] = new Array();
  originalVal: number = -1;
  cols: { header, field }[] = new Array();

  // for filter
  searching: boolean;
  criteria: any = {};
  tempData: any[];

  constructor(public _translateService: TranslateService, private _messageService: MessageService,
    private _orgService: OrganisationService, private _docTypesService: PostingService) { }

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

  editRow(row) {
    this.postingDocTypes.filter(row => row.isEditable).map(r => { r.isEditable = false; return r });
    row.isEditable = true;
    debugger;
    this.originalVal = row.documentTypeNewId;
  }

  cancel(row) {
    row.documentTypeNewId = this.originalVal;
    row.documentTypeNewName = this.docTypes.filter(row => row.id == this.originalVal)[0]?.documentTypeName;
    row.isEditable = false;
  }


  save(row) {
    // alert(JSON.stringify(row));
    this._docTypesService
      .updateNewDocType(this.selectedOrgId, this.selectedPrcId, row)
      .subscribe(res => {
        row.isEditable = false;
        let numOfRecords = res.length > 0 ? res[0] : 0;

        this._messageService.add({
          severity: 'success',
          summary: 'DONE!',
          detail: `Document new type is updated successfully in the targeted posting data, \n ${numOfRecords} updated.`
        });
      }, er => {
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

  prcChangedHandler(e) {
    if (e.value > 0) {
      this._docTypesService
        .getPostingDocTypes(this.selectedOrgId, e.value)
        .subscribe(
          data => {
            this.postingDocTypes = data;
            this.tempData = data;
          },
          error => console.log(error)
        );
    }
  }

  docTypeChangedHandler(e, row) {
    row.documentTypeNewId = e.value;
    row.documentTypeNewName = this.docTypes.filter(row => row.id == e.value)[0].documentTypeName;
  }


  async filterChange(query, colName) {
    this.searching = true;
    // debugger;
    if (!query) {
      delete this.criteria[colName];
      if (Object.keys(this.criteria).length < 1) {
        this.postingDocTypes = [...this.tempData];
      } else {
        for (const key in this.criteria) {
          if (Object.prototype.hasOwnProperty.call(this.criteria, key)) {
            const element = this.criteria[key];
            if (element.length < 3) {
              // debugger;
              // if (colName == 'documentTypeNewName') {
              //   this.postingDocTypes = this.tempData.filter(async value => { 
              //     if (!value[key]) {
              //       return false;
              //     }
              //     let translatedValue = await this._translateService.get(value[key]).toPromise();
              //     return element.toLowerCase() == translatedValue.toLowerCase() });
              // } else
                this.postingDocTypes = this.tempData.filter(value => value[key]?.toLowerCase() == element.toLowerCase());
            } else {
              // if (colName == 'documentTypeNewName') {
              //   this.postingDocTypes = this.tempData.filter(async value => { 
              //     if (!value[key]) {
              //       return false;
              //     }
              //     let translatedValue = await this._translateService.get(value[key]).toPromise();
              //     return element.toLowerCase().includes(translatedValue.toLowerCase()) });
              // } else
                this.postingDocTypes = this.tempData.filter(value => value[key]?.toLowerCase().includes(element.toLowerCase()));
            }
          }
        }
      }
    } else {
      this.postingDocTypes = [...this.tempData];
      for (const key in this.criteria) {
        if (Object.prototype.hasOwnProperty.call(this.criteria, key)) {
          const element = this.criteria[key];
          if (element.length < 3) {
            // if (colName == 'documentTypeNewName') {
            //   this.postingDocTypes = this.tempData.filter(async value => { 
            //     if (!value[key]) {
            //       return false;
            //     }
            //     let translatedValue = await this._translateService.get(value[key]).toPromise();
            //     return element.toLowerCase() == translatedValue.toLowerCase() });
            // } else
              this.postingDocTypes = this.postingDocTypes.filter(value => value[key]?.toString().toLowerCase() == element.toLowerCase());
          } else {
            // if (colName == 'documentTypeNewName') {
            //   this.postingDocTypes = this.tempData.filter(async value => { 
            //     if (!value[key]) {
            //       return false;
            //     }
            //     let translatedValue = await this._translateService.get(value[key]).toPromise();
            //     return element.toLowerCase().includes(translatedValue.toLowerCase()) });
            // } else
              this.postingDocTypes = this.postingDocTypes.filter(value => value[key]?.toString().toLowerCase().includes(element.toLowerCase()));
          }
        }
      } // end of for each criteria field
    }
    this.searching = false;
  }

}
