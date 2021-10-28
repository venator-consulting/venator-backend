import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { TableColumn } from 'src/app/shared/model/tableColumn';
import { OurServices, OurServicesItem } from 'src/app/shared/model/website';
import { WebsiteService } from '../../service/website.service';

@Component({
  selector: 'app-services-management',
  templateUrl: './services-management.component.html',
  styleUrls: ['./services-management.component.sass']
})
export class ServicesManagementComponent implements OnInit {
  waiting: boolean = true;
  data: OurServices = new OurServices();

  items: OurServicesItem[] = new Array();
  itemsTemp: OurServicesItem[] = new Array();
  cols: TableColumn[] = new Array();
  item: OurServicesItem = new OurServicesItem();
  submitted: boolean;
  itemDialog: boolean;
  originalVal: OurServicesItem = new OurServicesItem();

  fromFront: boolean;
  imageSrc: string | ArrayBuffer;

  criteria: any = {};
  filtersNo: number = 0;

  constructor(private _websiteService: WebsiteService, private _messageService: MessageService,
    public _translateService: TranslateService, private _confirmationService: ConfirmationService) { }


  ngOnInit(): void {
    this.cols = [
      { header: 'Order', field: 'order' },
      { header: 'Title', field: 'title' },
      { header: 'Subtitle', field: 'subtitle' },
      { header: 'img', field: 'img' },
    ]
    this.getData();
    this.getOurServicesItems();
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

  submitHandler() {
    this.waiting = true;
    this._websiteService
      .update(this.data)
      .subscribe(res => {
        this.data = res[0];
        this.waiting = false;
        this._messageService.add({ severity: 'success', summary: 'SUCCESS!', life: 10000, detail: 'updates successfully', });
      }, er => this.waiting = false);
  }

  getOurServicesItems() {
    this.waiting = true;
    this._websiteService
      .getOurServicesItems()
      .subscribe(res => {
        this.items = res?.length ? res : [];
        this.itemsTemp = [...this.items];
        debugger;
        this.waiting = false;
      }, er => this.waiting = false);
  };


  openNew() {
    this.item = new OurServicesItem();
    this.submitted = false;
    this.itemDialog = true;
  }

  UploadHandler1(event) {
    const selectedFiles: FileList = event.files;
    this.item.imgFile = selectedFiles[0];
    this.fromFront = true;
    if (selectedFiles && selectedFiles[0]) {
      const file = selectedFiles[0];
      const reader = new FileReader();
      reader.onload = e => this.imageSrc = reader.result;
      reader.readAsDataURL(file);
    }
  }

  hideDialog() {
    this.itemDialog = false;
    this.submitted = false;
  }

  saveItem() {
    this.submitted = true;
    this.waiting = true;
    const formData: FormData = new FormData();
    formData.append('photos', this.item.imgFile);
    const temp = { ...this.item };
    delete temp.imgFile;
    formData.append('data', JSON.stringify(temp));
    this._websiteService
      .saveOurServicesItems(formData)
      .subscribe(res => {
        // edit operation so don't push it to the table, just replace it.
        if (this.item.id) {
          this.item = res[0];
          let i = this.items.findIndex(item => item.id == this.item.id);
          this.items[i] = { ...this.item };
          // this.items = [...this.items];
          this._messageService.add({ severity: 'success', summary: 'Successful', detail: 'Item updated.', life: 3000 });
          // insert operation
        } else {
          this.item = res[0];
          this.items.push({ ...this.item });
          this.items = [...this.items];
          this._messageService.add({ severity: 'success', summary: 'Successful', detail: 'Item Created.', life: 3000 });
        }
        this.waiting = false;
        this.itemDialog = false;

      }, er => this.waiting = false);

  }

  // save(row) {
  //   this.waiting = true;
  //   const formData: FormData = new FormData();
  //   formData.append('photos', this.item.imgFile);
  //   const temp = { ...this.item };
  //   delete temp.imgFile;
  //   formData.append('data', JSON.stringify(temp));
  //   this._websiteService
  //     .saveOurServicesItems(row)
  //     .subscribe(res => {
  //       row.isEditable = false;
  //       this.items = [...this.items];
  //       this.waiting = false;
  //       this._messageService.add({ severity: 'success', summary: 'Successful', detail: 'Item Updated.', life: 3000 });
  //     }, er => this.waiting = false);
  // }

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
          .deleteOurServicesItems(row.id)
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
    // this.items.filter(row => row.isEditable).map(r => { r.isEditable = false; return r });
    // row.isEditable = true;
    // this.originalVal = row;
    this.item = { ...row };
    this.submitted = false;
    this.itemDialog = true;
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
