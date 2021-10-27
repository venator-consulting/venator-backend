import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { TableColumn } from 'src/app/shared/model/tableColumn';
import { About, AboutItem } from 'src/app/shared/model/website';
import { WebsiteService } from '../../service/website.service';

@Component({
  selector: 'app-about-management',
  templateUrl: './about-management.component.html',
  styleUrls: ['./about-management.component.sass']
})
export class AboutManagementComponent implements OnInit {

  data: About = new About();
  waiting: boolean = true;
  fromFront: boolean;
  imageSrc: string | ArrayBuffer;

  items: AboutItem[] = new Array();
  itemsTemp: AboutItem[] = new Array();
  cols: TableColumn[] = new Array();
  item: AboutItem = new AboutItem();
  submitted: boolean;
  itemDialog: boolean;
  originalVal: AboutItem = new AboutItem();
  criteria: any = {};
  filtersNo: number = 0;

  constructor(private _websiteService: WebsiteService, private _messageService: MessageService,
    public _translateService: TranslateService, private _confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.cols = [
      { header: 'Order', field: 'order' },
      { header: 'Title', field: 'title' },
      { header: 'Sub-Title', field: 'subtitle' },
      { header: 'Icon', field: 'icon' }
    ];

    this.getData();
    this.getAboutItem();
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

  UploadHandler1(event) {
    const selectedFiles: FileList = event.files;
    this.data.aboutImgFile = selectedFiles[0];
    this.fromFront = true;
    if (selectedFiles && selectedFiles[0]) {
      const file = selectedFiles[0];
      const reader = new FileReader();
      reader.onload = e => this.imageSrc = reader.result;
      reader.readAsDataURL(file);
    }
  }

  submitHandler() {
    this.waiting = true;
    const formData: FormData = new FormData();
    formData.append('photos', this.data.aboutImgFile);
    const temp = { ...this.data };
    delete temp.aboutImgFile;
    formData.append('data', JSON.stringify(temp));
    this._websiteService
      .updateAbout(formData)
      .subscribe(res => {
        this.data = res[0];
        this.waiting = false;
        this._messageService.add({ severity: 'success', summary: 'SUCCESS!', life: 10000, detail: 'updates successfully', });
      }, er => this.waiting = false);
  }


  getAboutItem() {
    this.waiting = true;
    this._websiteService
      .getAboutItems()
      .subscribe(res => {
        this.items = res?.length ? res : [];
        this.itemsTemp = [...this.items];
        debugger;
        this.waiting = false;
      }, er => this.waiting = false);
  };


  openNew() {
    this.item = new AboutItem();
    this.submitted = false;
    this.itemDialog = true;
  }

  hideDialog() {
    this.itemDialog = false;
    this.submitted = false;
  }

  saveItem() {
    this.submitted = true;
    this.waiting = true;
    this._websiteService
      .saveAboutItems(this.item)
      .subscribe(res => {
        this.item = res[0];
        this.items.push({ ...this.item });
        this.items = [...this.items];
        this.itemsTemp = [...this.items];
        this.waiting = false;
        this.itemDialog = false;
        this._messageService.add({ severity: 'success', summary: 'Successful', detail: 'Item Created.', life: 3000 });
      }, er => this.waiting = false);

  }

  save(row) {
    this.waiting = true;
    this._websiteService
      .saveAboutItems(row)
      .subscribe(res => {
        row.isEditable = false;
        this.items = [...this.items];
        this.itemsTemp = [...this.items];
        this.waiting = false;
        this._messageService.add({ severity: 'success', summary: 'Successful', detail: 'Item Updated.', life: 3000 });
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
          .deleteAboutItems(row.id)
          .subscribe(res => {
            this.items = this.items.filter(link => link.id != row.id);
            this.itemsTemp = [...this.items];
            this.waiting = false;
            this._messageService.add({ severity: 'success', summary: 'Successful', detail: 'Item Deleted.', life: 3000 });
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
    this.items.filter(row => row.isEditable).map(r => { r.isEditable = false; return r });
    row.isEditable = true;
    this.originalVal = row;
  }

  cancel(row) {
    row = this.originalVal;
    row.isEditable = false;
  }

  clearFilter() {
    this.criteria = {};
    this.items = [...this.itemsTemp];
    this.filtersNo = 0;
  }


  async filterChange(query, colName) {
    this.waiting = true;
    if (!query || !query?.toString()?.trim()) {
      this.filtersNo--;
      delete this.criteria[colName];
      if (Object.keys(this.criteria).length < 1) {
        this.items = [...this.itemsTemp];
        this.filtersNo = 0;
      } else {
        for (const key in this.criteria) {
          if (Object.prototype.hasOwnProperty.call(this.criteria, key)) {
            const element = this.criteria[key];
            this.items = this.itemsTemp.filter(value => value[key]?.toLowerCase().includes(element.toLowerCase()));
          }
        }
      }
    } else {
      this.filtersNo++;
      this.items = [...this.itemsTemp];
      for (const key in this.criteria) {
        if (Object.prototype.hasOwnProperty.call(this.criteria, key)) {
          const element = this.criteria[key];
          this.items = this.items.filter(value => value[key]?.toString().toLowerCase().includes(element.toLowerCase()));
        }
      } // end of for each criteria field
    }
    this.waiting = false;
  }

}
