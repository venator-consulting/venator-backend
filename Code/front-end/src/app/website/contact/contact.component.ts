import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ContactInfo, SocialLink } from 'src/app/shared/model/contact';
import { Mail } from '../model/mail';
import { DataService } from '../service/data.service';
import { MailService } from '../service/mail.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  mail: Mail = new Mail();
  canSend: boolean = false;
  data: ContactInfo = new ContactInfo();
  links: SocialLink[] = new Array();

  constructor(private _mailService: MailService, private _dataService: DataService, private _messageService: MessageService) { }

  ngOnInit(): void {
    this.getData();
    this.getSocialLinks();
  }

  getData() {
    this._dataService
      .get()
      .subscribe(res => this.data = res);
  }

  getSocialLinks() {
    this._dataService.getSocialLinks()
      .subscribe(res => this.links = res.length ? res : []);
  }

  showResponse(response) {
    //call to a backend to verify against recaptcha with private key
    this.canSend = true;
  }

  send() {
    this.canSend = false;
    this._mailService
      .sendMail(this.mail)
      .subscribe(res => {
        this._messageService.add({
          severity: 'success',
          summary: 'Success!',
          life: 10000,
          detail: 'Your Message sent successfully.',
        });
      }, er => { });
  }

}
