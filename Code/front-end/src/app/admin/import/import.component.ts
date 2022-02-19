import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { Choices } from "../../shared/model/choices";
import { ImportService } from "../service/import.service";
import { FileToImport } from "../../shared/model/file-import";
import { TranslateService } from '@ngx-translate/core';
import { Procedures } from 'src/app/shared/model/procedures';
import { OrganisationService } from '../service/organisation.service';
import { Organisation } from 'src/app/shared/model/organisation';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.sass']
})
export class ImportComponent implements OnInit {


  items: MenuItem[] = [];
  activeIndex: number = 0;
  uploadedFiles: any[] = [];
  templates: Choices[] = Choices.getTemplates();
  fileTypes: Choices[] = Choices.getFileType();
  fileClass: Choices[] = Choices.getFileClass();
  locals: Choices[] = Choices.getLocalization();
  accountTypes: Choices[] = Choices.getAccountTypes();
  selectedTemplate: any;
  waiting: boolean = false;
  filesList: FileToImport[] = new Array();
  currentFileIndex: number = -1;
  accountsCustomTemplate: any = {};
  postingCustomTemplate: any = {};
  headCustomTemplate: any = {};
  orgs: Organisation[] = new Array();
  selectedOrgId: number = -1;
  procedures: Procedures[] = new Array();
  selectedProcedureId: number = -1;
  tempheader: any = {};

  progress: number = 0;
  @ViewChild('progressElm') progressElm: ElementRef;
  importProgress: number = 0;


  constructor(public _translateService: TranslateService, private _messageService: MessageService,
    private _importService: ImportService, private _orgService: OrganisationService,
    private cdRef: ChangeDetectorRef) {
    _translateService.addLangs(['de', 'en']);
    _translateService.setDefaultLang('de');
    const browserLang = _translateService.getBrowserLang();
    _translateService.use(browserLang.match(/de|en/) ? browserLang : 'de');
  }

  ngOnInit(): void {

    this._translateService.get('Admin_Import').subscribe(elem => {

      this.items = [
        {
          label: elem.firstStepLabel,
          command: (event: any) => {
            this.activeIndex = 0;
            // this._messageService.add({severity:'info', summary:'First Step', detail: event.item.label});
          }
        },
        {
          label: elem.secondStepLabel,
          command: (event: any) => {
            this.activeIndex = 1;
          }
        },
        {
          label: elem.thirdStepLabel,
          command: (event: any) => {
            this.activeIndex = 2;
          }
        },
        {
          label: elem.firthStepLabel,
          command: (event: any) => {
            this.activeIndex = 3;
          }
        }
      ];


      this._orgService.get()
        .subscribe(
          (data) => {
            this.orgs = data;
          },
          (error) => console.log(error)
        );
    })



  }
  // end of ngOnInit


  orgChangedHandler(e) {
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

  selectTemplatHandler(e) {
    this.filesList = [];
    this.addFormData();
  }

  removeFormData(index: number) {
    this.filesList.splice(index, 1);
  }

  addFormData() {
    let f = new FileToImport();
    f.OrganisationId = this.selectedOrgId;
    f.procedureId = this.selectedProcedureId;
    f.defaultTemplate = this.selectedTemplate;
    this.filesList.push(f);
  }

  goToImport(wizardIndex, fileIndex) {
    this.currentFileIndex = fileIndex;
    this.activeIndex = ++wizardIndex;
  }

  goNext(index) {
    this.activeIndex = ++index;
  }

  goPrev(index) {
    this.activeIndex = --index;
  }

  setTemplate() {
    this.filesList[this.currentFileIndex].defaultTemplate = this.postingCustomTemplate;
  }

  deleteFileFromServer(f: FileToImport, index) {
    this.waiting = true;

    const nameOnServer = f?.nameOnServer;
    if (nameOnServer) {
      this._importService
        .deleteFile({ nameOnServer: nameOnServer })
        .subscribe(res => {
          this.waiting = false;
          this._messageService.add({
            severity: 'success',
            summary: 'File Deleted!',
            detail: 'the file ' + this.filesList[index].orginalName + ' deleted successfuly!'
          });
          this.removeFormData(index);

        },
          err => {
            this.waiting = false;
            this._messageService.add({
              severity: 'warning',
              summary: 'File not Deleted!',
              detail: 'the file ' + this.filesList[index].orginalName + ' not found on the server!'
            });
          });
    } else {
      this._messageService.add({
        severity: 'warning',
        summary: 'File not Deleted!',
        detail: 'There is no file selected!'
      });
    }

  }

  // upload step 1
  uploadFirstStep(f: FileToImport, index) {
    this.waiting = true;
    // send to back-end
    // if type excel to excel-head
    // else if type csv to csv-head
    // else warn user to select type
    // get headers orginal name  and name on the server and set them to f
    const file: File = f?.file;
    const fileType: number = f?.fileType?.value;
    const local: number = f?.local?.value;
    const fileClass: number = f?.fileClass?.value;
    const temmplate: number = this.selectedTemplate;
    const formData: FormData = new FormData();
    if (!!file) {
      formData.append('excel', file);
    } else {
      this._messageService.add({
        severity: 'warning',
        summary: 'Please choose a file',
        detail: 'You should chose a posting file!'
      });
      return;
    }

    formData.append('data', JSON.stringify({
      template: temmplate,
      fileType: fileType,
      fileClass: fileClass,
      local: local
    }));

    this._importService
      .uploadFile(formData)
      .subscribe((response: any) => {
        switch (response.type) {
          case HttpEventType.Sent:
            // console.log('Request has been made!');
            break;
          case HttpEventType.ResponseHeader:
            // console.log('Response header has been received!');
            break;
          case HttpEventType.UploadProgress:
            this.progress = Math.round(response.loaded / response.total * 100);
            // this.progressElm.nativeElement.style.width = +this.progress + '%';
            this.cdRef.detectChanges();
            // console.log(`Uploaded! ${this.progress}%`);
            break;
          case HttpEventType.Response:
            let res = response.body;

            //#region if upload finished
            this.waiting = false;
            this.tempheader = res.headers;
            f.fileHeader = new Array();
            for (let index = 0; index < res.headers.length; index++) {
              const element = res.headers[index];
              f.fileHeader.push({ name: element });
            }
            // f.fileHeader = res.headers;
            f.nameOnServer = res.fileName;
            f.orginalName = res.orginalName;
            f.defaultTemplate = res.defaultTemplate;
            if (fileClass === 1) {
              this.accountsCustomTemplate = res.defaultTemplate;
            } else if (fileClass === 2) {
              this.postingCustomTemplate = res.defaultTemplate;
            } else if (fileClass === 3) {
              this.headCustomTemplate = res.defaultTemplate;
            }
            f.uploaded = true;
            this.currentFileIndex = index;
            // console.dir(this.filesList);
            this._messageService.add({
              severity: 'success',
              summary: 'File uploaded!',
              detail: 'the file ' + this.filesList[this.currentFileIndex].orginalName + ' uploaded successfuly! you can upload another file now'
            });
            //#endregion if upload finished

            setTimeout(() => {
              this.progress = 0;
              // this.progressElm.nativeElement.style.width = +this.progress + '%';
              this.cdRef.detectChanges();
            }, 1500);
            break;
        } // end of switch
      }, err => {
        // console.log('error: ' + err);
        this.waiting = false;
        this._messageService.add({
          severity: 'error',
          summary: 'ERROR!',
          detail: err.error.msg
        });
      });
  }
  // upload step 1 ends


  UploadHandler(event, f: FileToImport, index: number) {
    const selectedFiles: FileList = event.files;
    f.file = selectedFiles[0];
    f.index = index;
  }


  importThisFile() {
    this.waiting = true;

    const theFile = this.filesList[this.currentFileIndex];

    const filePath = theFile.nameOnServer;
    const fileType = theFile.fileType?.value;
    const fileClass = theFile.fileClass?.value;
    const local = theFile.local?.value;
    const accountType = theFile.accountType?.value;
    const template = theFile.defaultTemplate;
    const OrganisationId = theFile.OrganisationId;
    const procedureId = theFile.procedureId;

    const data = {
      data: {
        template: template,
        fileType: fileType,
        fileClass: fileClass,
        local: local,
        filePath: filePath,
        accountType: accountType,
        OrganisationId: OrganisationId,
        procedureId: procedureId
      }
    }

    this._importService
      .importFile(data)
      .subscribe(res => {
        this.waiting = false;
        this.filesList[this.currentFileIndex].imported = true;
        this._messageService.add({
          severity: 'success',
          summary: 'File imported!',
          detail: 'the file ' + this.filesList[this.currentFileIndex].orginalName + ' imported successfuly! you can import another file now'
        });
      }, err => {
        this.waiting = false;
        this._messageService.add({
          severity: 'error',
          summary: 'ERROR!',
          detail: err.error.msg
        });
      });
    // .subscribe(
    //   (progress) => {
    //     this.importProgress = progress;
    //   },
    //   (error) => {
    //     this.waiting = false;
    //     this._messageService.add({
    //       severity: 'error',
    //       summary: 'ERROR!',
    //       detail: error.error.msg
    //     });
    //   },
    //   () => {
    //     // on complete
    //     this._importService.closeSSE();
    //     this.waiting = false;
    //     this.filesList[this.currentFileIndex].imported = true;
    //     // console.dir(this.filesList);
    //     this._messageService.add({
    //       severity: 'success',
    //       summary: 'File imported!',
    //       detail: 'the file ' + this.filesList[this.currentFileIndex].orginalName + ' imported successfuly! you can import another file now'
    //     });
    //   },
    // );
  } // end of import this file function



  filterMapping(event) {

    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < this.filesList[this.currentFileIndex].fileHeader.length; i++) {
      let header = this.filesList[this.currentFileIndex].fileHeader[i];
      if (header.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(header);
      }
    }

    this.filesList[this.currentFileIndex].fileHeader = filtered;
  } // end of filter mapping function


  restoreFileHeaders() {
    this.filesList[this.currentFileIndex].fileHeader = this.tempheader;
  }


}
