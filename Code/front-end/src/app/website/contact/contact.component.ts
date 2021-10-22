import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Mail } from '../model/mail';
import { MailService } from '../service/mail.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  mail: Mail = new Mail();

  constructor(private _mailService: MailService, private _messageService: MessageService) { }

  ngOnInit(): void {
  }

  send() {
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
