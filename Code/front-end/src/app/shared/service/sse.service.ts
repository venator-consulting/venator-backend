import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SseService {

  constructor(private _auth: AuthService, private _messageService: MessageService,
    private _translateService: TranslateService) { }

  getSSE(url: string): Observable<any[]> {

    let subject = new BehaviorSubject([]);
    let token = this._auth.getToken();
    let evs: EventSource = new EventSource(url + '?token=' + token);

    evs.onopen = function (e) {
      console.log('Opening connection.Ready State is ' + this.readyState);
    }

    evs.onmessage = function (e) {
      console.log('Message Received.Ready State is ' + this.readyState);
      let data = e.data == [] ? { progress: 0 } : JSON.parse(e.data);
      if (data.progress >= 100) evs.close();
      subject.next(data);
    }

    evs.addEventListener("progress", function (e) {
      console.log("Timestamp event Received.Ready State is " + this.readyState);
      let data = e["data"] == [] ? { progress: 0 } : JSON.parse(e["data"]);
      if (data.progress >= 100) evs.close();
      subject.next(data);
    });

    evs.addEventListener("error", (e) => {
      console.log("Timestamp event Received.Ready State is " + evs.readyState);
      let data = e["data"] == [] ? { error: 'Please_Contact_Developer' } : JSON.parse(e["data"]);
      evs.close();
      this._translateService
        .get('ErrorHandler.' + data.error)
        .toPromise()
        .then((errorMsg) => {
          this._messageService.add({
            severity: 'error',
            summary: 'ERROR!',
            life: 10000,
            detail: errorMsg,
          });
        });
      subject.error(data);
    });

    evs.onerror = (e: Event) => {
      console.log(e);
      if (evs.readyState == 0) {
        console.log('Reconnecting…');
      } else {
        const msg = e["data"] ?? 'Please_Contact_Developer';
        this._translateService
          .get('ErrorHandler.' + msg)
          .toPromise()
          .then((errorMsg) => {
            this._messageService.add({
              severity: 'error',
              summary: 'ERROR!',
              life: 10000,
              detail: errorMsg,
            });
          });
        subject.error(e);
      }
    }

    return subject.asObservable();
  }

}
