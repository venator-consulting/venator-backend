import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { any } from 'sequelize/types/lib/operators';
import { TemplateTypes } from "../../model/template-types.model";
import { ImportService } from "../service/import.service";

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.sass']
})
export class ImportComponent implements OnInit {

  items: MenuItem[] = [];
  activeIndex: number = 0;
  uploadedFiles: any[] = [];
  templates: TemplateTypes[] = TemplateTypes.getTemplates();
  selectedTemplate: any;
  waiting: boolean = false;

  
  constructor(private _messageService: MessageService, private _importService: ImportService) { }

  ngOnInit(): void {

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


  } // end of ngOnInit

  goNext(index) {
    this.activeIndex = ++index;
  }

  goPrev(index) {
    this.activeIndex = --index;
  }

  UploadPostingFile(event) {

    this.waiting = true;

    const selectedFiles: FileList = event.files;
    // let files = event.files;
    const formData: FormData = new FormData();
    let currentFileUpload: File = selectedFiles[0];

    if (!!selectedFiles) {
      formData.append('excel', currentFileUpload);
      // files.forEach((file : File) => {
      //   formData.append('excel', file, file.name);
      // });
    } else {
      this._messageService.add({
        severity: 'warning',
        summary: 'Please choose a file',
        detail: 'You should chose a posting file!'
      });
      return;
    }
    
    debugger;

    if (!this.selectedTemplate || isNaN(this.selectedTemplate.value)) {
      this._messageService.add({
        severity: 'warning',
        summary: 'Please select a template',
        detail: 'You should select a template to map the file to the database!'
      });
      this.waiting = false;
      return;
    }

    formData.append('data', JSON.stringify({
      template: this.selectedTemplate.value
    }));

    this._importService
      .uploadPosting(formData)
      .subscribe(res => {
        console.dir('done: ' + res);
        this.waiting = false;
        this._messageService.add({
          severity: 'success',
          summary: 'Posting uploaded!',
          detail: 'the file uploaded successfuly!'
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


  } // end of uploading post file function


}
