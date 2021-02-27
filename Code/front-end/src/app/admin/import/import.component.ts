import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.sass']
})
export class ImportComponent implements OnInit {

  items: MenuItem[] = [];
  activeIndex: number = 0;
  uploadedFiles: any[] = [];

  constructor(private _messageService: MessageService) { }

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


  }


  onUpload(event: { files: any; }) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }

    this._messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
}


}
