import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { Choices } from "../../shared/model/choices";
import { ImportService } from "../service/import.service";
import { FileToImport } from "../../shared/model/file-import";
import { FormGroup, FormControl, FormArray, FormBuilder } from "@angular/forms";
import { UsersService } from "../service/users.service";
import { Users } from 'src/app/shared/model/users';
import { Procedures } from 'src/app/shared/model/procedures';
import { OrganisationService } from '../service/organisation.service';
import { Organisation } from 'src/app/shared/model/organisation';

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
  managers: Users[] = new Array();
  orgs: Organisation[] = new Array();
  selectedOrgId: number = -1;
  procedures: Procedures[] = new Array();
  selectedProcedureId: number = -1;


  constructor(private _messageService: MessageService, private _importService: ImportService, private _orgService: OrganisationService) {

  }

  ngOnInit(): void {

    // this.addFormData();

    this.items = [
      {
        label: 'BasisDatie importieren',
        command: (event: any) => {
          this.activeIndex = 0;
          // this._messageService.add({severity:'info', summary:'First Step', detail: event.item.label});
        }
      },
      {
        label: 'Helper files',
        command: (event: any) => {
          this.activeIndex = 1;
        }
      },
      {
        label: 'Mapping',
        command: (event: any) => {
          this.activeIndex = 2;
        }
      },
      {
        label: 'Import',
        command: (event: any) => {
          this.activeIndex = 3;
        }
      }
    ];


    // this._usersService.getManagers()
    //   .subscribe(
    //     (data) => {
    //       const temp = data.results;
    //       temp.forEach(manager => {
    //         manager.fullName = manager.title + '. ' + manager.firstname + ' ' + manager.lastname;
    //         // delete manager.Role;
    //       });
    //       this.managers = temp;
    //     },
    //     (error) => console.log(error)
    //   );


    this._orgService.get()
      .subscribe(
        (data) => {
          this.orgs = data;
        },
        (error) => console.log(error)
      );


  } // end of ngOnInit


  orgChangedHandler(e) {
    // alert(e.value);
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
    this.addFormData();
  }

  removeFormData(index: number) {
    this.filesList = this.filesList.splice(index, 1);
  }

  addFormData() {
    let f = new FileToImport();
    f.managerId = this.selectedOrgId;
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
    const temmplate: number = this.selectedTemplate?.value;
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
      .subscribe(res => {
        console.dir('done: ' + res);

        this.waiting = false;
        f.fileHeader = res.headers;
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
        console.dir(this.filesList);
        this._messageService.add({
          severity: 'success',
          summary: 'File uploaded!',
          detail: 'the file ' + this.filesList[this.currentFileIndex].orginalName + ' uploaded successfuly! you can upload another file now'
        });
      }, err => {
        console.log('error: ' + err);
        this.waiting = false;
        this._messageService.add({
          severity: 'error',
          summary: 'ERROR!',
          detail: 'There is an error occured, please try again!'
        });
      });

  }
  // upload step 1 ends


  UploadHandler(event, f: FileToImport, index: number) {
    const selectedFiles: FileList = event.files;
    debugger;
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
    const managerId = theFile.managerId;
    const procedureId = theFile.procedureId;

    // const formData: FormData = new FormData();

    // formData.append('data', JSON.stringify({
    //   template: template,
    //   fileType: fileType,
    //   fileClass: fileClass,
    //   local: local,
    //   filePath: filePath,
    //   accountType: accountType
    // }));

    const data = {
      data: {
        template: template,
        fileType: fileType,
        fileClass: fileClass,
        local: local,
        filePath: filePath,
        accountType: accountType,
        managerId: managerId,
        procedureId: procedureId
      }
    }

    this._importService
      .importFile(data)
      .subscribe(res => {
        console.dir('done: ' + res);

        this.waiting = false;
        this.filesList[this.currentFileIndex].imported = true;
        console.dir(this.filesList);
        this._messageService.add({
          severity: 'success',
          summary: 'File imported!',
          detail: 'the file ' + this.filesList[this.currentFileIndex].orginalName + ' imported successfuly! you can import another file now'
        });
      }, err => {
        debugger;
        console.log('error: ' + err.error.error);
        this.waiting = false;
        this._messageService.add({
          severity: 'error',
          summary: 'ERROR!',
          detail: err.error.error
        });
      });

  }
  // Upload(event, f: FileToImport) {

  //   this.waiting = true;

  //   const selectedFiles: FileList = event.files;
  //   // let files = event.files;
  //   const formData: FormData = new FormData();
  //   let currentFileUpload: File = selectedFiles[0];

  //   if (!!selectedFiles) {
  //     formData.append('excel', currentFileUpload);
  //     // files.forEach((file : File) => {
  //     //   formData.append('excel', file, file.name);
  //     // });
  //   } else {
  //     this._messageService.add({
  //       severity: 'warning',
  //       summary: 'Please choose a file',
  //       detail: 'You should chose a posting file!'
  //     });
  //     return;
  //   }


  //   formData.append('data', JSON.stringify({
  //     template: this.selectedTemplate.value
  //   }));

  //   this._importService
  //     .uploadFile(formData)
  //     .subscribe(res => {
  //       console.dir('done: ' + res);
  //       this.waiting = false;
  //       this._messageService.add({
  //         severity: 'success',
  //         summary: 'Posting uploaded!',
  //         detail: 'the file uploaded successfuly!'
  //       });
  //     }, err => {
  //       console.log('error: ' + err);
  //       this.waiting = false;
  //       this._messageService.add({
  //         severity: 'error',
  //         summary: 'ERROR!',
  //         detail: 'There is an error occured, please try again!'
  //       });
  //     });


  // } // end of uploading post file function


}
