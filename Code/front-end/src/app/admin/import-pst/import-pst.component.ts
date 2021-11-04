import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Organisation } from 'src/app/shared/model/organisation';
import { Procedures } from 'src/app/shared/model/procedures';
import { ImportService } from '../service/import.service';
import { OrganisationService } from '../service/organisation.service';

@Component({
  selector: 'app-import-pst',
  templateUrl: './import-pst.component.html',
  styleUrls: ['./import-pst.component.sass']
})
export class ImportPstComponent implements OnInit {

  orgs: Organisation[] = new Array();
  procedures: Procedures[] = new Array();
  selectedOrgId: number = -1;
  selectedPrcId: number = -1;
  waiting: boolean = false;
  theFile: File;

  constructor(public _translateService: TranslateService, private _messageService: MessageService,
    private _orgService: OrganisationService, private _importService: ImportService,
    private _confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this._orgService.get()
      .subscribe(
        (data) => {
          this.orgs = data;
        },
        (error) => this.waiting = false
      );
  }

  orgChangedHandler(e) {
    this.waiting = true;
    this.selectedPrcId = 0;
    if (e.value > 0) {
      this._orgService.getProcedures(e.value)
        .subscribe(
          data => {
            this.waiting = false;
            this.procedures = data;
          },
          error => this.waiting = false
        );
    }
  }

  prcChangedHandler(e) {
    if (e.value > 0) {
    }
  }

  UploadHandler(event) {
    this.theFile = event.files[0];
  }

  save() {
    this.waiting = true;
    const data = { orgId: this.selectedOrgId, prcId: this.selectedPrcId };
    const formData: FormData = new FormData();
    formData.append('file', this.theFile);
    formData.append('data', JSON.stringify(data));
    this._importService
      .importPST(formData)
      .subscribe(res => {
        this.waiting = false;
        this._messageService.add({ severity: 'success', summary: 'File imported!', detail: '' });
      }, er => this.waiting = false);
  }

}
