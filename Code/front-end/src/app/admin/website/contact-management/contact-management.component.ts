import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { ContactInfo, SocialLink } from 'src/app/shared/model/contact';
import { TableColumn } from 'src/app/shared/model/tableColumn';
import { WebsiteService } from '../../service/website.service';

@Component({
  selector: 'app-contact-management',
  templateUrl: './contact-management.component.html',
  styleUrls: ['./contact-management.component.sass']
})
export class ContactManagementComponent implements OnInit {

  data: ContactInfo = new ContactInfo();
  links: SocialLink[] = new Array();
  linksTemp: SocialLink[] = new Array();
  waiting: boolean = true;
  cols: TableColumn[] = new Array();
  link: SocialLink = new SocialLink();
  submitted: boolean;
  linkDialog: boolean;
  originalVal: SocialLink = new SocialLink();

  criteria: any = {};
  filtersNo: number = 0;

  constructor(private _websiteService: WebsiteService, private _messageService: MessageService,
    public _translateService: TranslateService, private _confirmationService: ConfirmationService) { }

  ngOnInit(): void {

    this.getData();
    this.getSocialLink();
    this.cols = [
      {
        header: 'Name',
        field: 'name'
      },
      {
        header: 'Icon',
        field: 'icon'
      },
      {
        header: 'Order',
        field: 'order'
      },
      {
        header: 'URL',
        field: 'url'
      },
    ];
  }

  getData() {
    this.waiting = true;
    this._websiteService
      .get()
      .subscribe(res => {
        this.data = res;
        this.waiting = false;
      }, er => this.waiting = false);
  }

  getSocialLink() {
    this.waiting = true;
    this._websiteService
      .getSocialLinks()
      .subscribe(res => {
        this.links = res?.length ? res : [];
        this.linksTemp = [...this.links];
        debugger;
        this.waiting = false;
      }, er => this.waiting = false);
  };

  submitHandler() {
    this._websiteService
      .update(this.data)
      .subscribe(res => {
        this.data = res[0];
        this.waiting = false;
        this._messageService.add({ severity: 'success', summary: 'SUCCESS!', life: 10000, detail: 'updates successfully', });
      }, er => this.waiting = false);
  }

  openNew() {
    this.link = new SocialLink();
    this.submitted = false;
    this.linkDialog = true;
  }

  hideDialog() {
    this.linkDialog = false;
    this.submitted = false;
  }

  savelink() {
    this.submitted = true;
    this.waiting = true;
    this._websiteService
      .saveSocilaLinks(this.link)
      .subscribe(res => {
        this.link = res[0];
        this.links.push({ ...this.link });
        this.links = [...this.links];
        this.waiting = false;
        this.linkDialog = false;
        this._messageService.add({ severity: 'success', summary: 'Successful', detail: 'Social Link Created.', life: 3000 });
      }, er => this.waiting = false);

  }

  save(row) {
    this.waiting = true;
    this._websiteService
      .saveSocilaLinks(row)
      .subscribe(res => {
        row.isEditable = false;
        this.links = [...this.links];
        this.waiting = false;
        this._messageService.add({ severity: 'success', summary: 'Successful', detail: 'Social Link Updated.', life: 3000 });
      }, er => this.waiting = false);
  }

  async reset(row) {
    this._confirmationService.confirm({
      message: await this._translateService.get('confirm_messages.body_delete').toPromise(),
      header: await this._translateService.get('confirm_messages.delete').toPromise(),
      icon: 'pi pi-info-circle',
      acceptLabel: await this._translateService.get('confirm_messages.yes').toPromise(),
      rejectLabel: await this._translateService.get('confirm_messages.cancel').toPromise(),
      accept: () => {
        this.waiting = true;
        this._websiteService
        .deleteSocialLink(row.id)
        .subscribe(res => {
          this.links = this.links.filter(link => link.id != row.id);
          this.linksTemp = [...this.links];
          this.waiting = false;
          this._messageService.add({ severity: 'success', summary: 'Successful', detail: 'Social Link Deleted.', life: 3000 });
        }, er => this.waiting = false);
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

  editRow(row) {
    this.links.filter(row => row.isEditable).map(r => { r.isEditable = false; return r });
    row.isEditable = true;
    this.originalVal = row;
  }

  cancel(row) {
    row = this.originalVal;
    row.isEditable = false;
  }

  clearFilter() {
    this.criteria = {};
    this.links = [...this.linksTemp];
    this.filtersNo = 0;
  }


  async filterChange(query, colName) {
    this.waiting = true;
    if (!query || !query?.toString()?.trim()) {
      this.filtersNo--;
      delete this.criteria[colName];
      if (Object.keys(this.criteria).length < 1) {
        this.links = [...this.linksTemp];
        this.filtersNo = 0;
      } else {
        for (const key in this.criteria) {
          if (Object.prototype.hasOwnProperty.call(this.criteria, key)) {
            const element = this.criteria[key];
            this.links = this.linksTemp.filter(value => value[key]?.toLowerCase().includes(element.toLowerCase()));
          }
        }
      }
    } else {
      this.filtersNo++;
      this.links = [...this.linksTemp];
      for (const key in this.criteria) {
        if (Object.prototype.hasOwnProperty.call(this.criteria, key)) {
          const element = this.criteria[key];
          this.links = this.links.filter(value => value[key]?.toString().toLowerCase().includes(element.toLowerCase()));
        }
      } // end of for each criteria field
    }
    this.waiting = false;
  }

}
