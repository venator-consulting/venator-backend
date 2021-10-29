import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Slider } from 'src/app/shared/model/website';
import { WebsiteService } from '../../service/website.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-slider-management',
  templateUrl: './slider-management.component.html',
  styleUrls: ['./slider-management.component.sass']
})
export class SliderManagementComponent implements OnInit {

  data: Slider = new Slider();
  waiting: boolean = true;
  fromFront1: boolean = false;
  imageSrc1: string | ArrayBuffer;
  fromFront3: boolean;
  imageSrc3: string | ArrayBuffer;
  fromFront2: boolean;
  imageSrc2: string | ArrayBuffer;

  constructor(private _websiteService: WebsiteService, private _messageService: MessageService,
    public _translateService: TranslateService,) { }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this._websiteService
      .get()
      .subscribe(res => {
        this.data = res;
        this.waiting = false;
      }, er => this.waiting = false);
  }



  UploadHandler1(event) {
    const selectedFiles: FileList = event.files;
    this.data.sliderImg1File = selectedFiles[0];
    this.fromFront1 = true;
    if (selectedFiles && selectedFiles[0]) {
      const file = selectedFiles[0];
      const reader = new FileReader();
      reader.onload = e => this.imageSrc1 = reader.result;
      reader.readAsDataURL(file);
    }
  }

  UploadHandler2(event) {
    const selectedFiles: FileList = event.files;
    this.data.sliderImg2File = selectedFiles[0];
    this.fromFront2 = true;
    if (selectedFiles && selectedFiles[0]) {
      const file = selectedFiles[0];
      const reader = new FileReader();
      reader.onload = e => this.imageSrc2 = reader.result;
      reader.readAsDataURL(file);
    }
  }

  UploadHandler3(event) {
    const selectedFiles: FileList = event.files;
    this.data.sliderImg3File = selectedFiles[0];
    this.fromFront3 = true;
    if (selectedFiles && selectedFiles[0]) {
      const file = selectedFiles[0];
      const reader = new FileReader();
      reader.onload = e => this.imageSrc3 = reader.result;
      reader.readAsDataURL(file);
    }
  }

  submitHandler() {
    this.waiting = true;
    const formData: FormData = new FormData();
    this.data.files = [];
    if (this.data.sliderImg1File) {
      formData.append('photos', this.data.sliderImg1File);
      this.data.files.push(1);
    }
    if (this.data.sliderImg2File) {
      formData.append('photos', this.data.sliderImg2File);
      this.data.files.push(2);
    }
    if (this.data.sliderImg3File) {
      formData.append('photos', this.data.sliderImg3File);
      this.data.files.push(3);
    }
    const temp = { ...this.data };
    delete temp.sliderImg1File;
    delete temp.sliderImg2File;
    delete temp.sliderImg3File;
    formData.append('data', JSON.stringify(temp));
    this._websiteService
      .updateSlider(formData)
      .subscribe(res => {
        this.waiting = false;
        this.data = res[0];
        this._messageService.add({ severity: 'success', summary: 'SUCCESS!', detail: 'Updated successfully!' });
      }, er => this.waiting = false)
  }

}
