import { Injectable, NgZone } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { SSE } from 'sse.js';

@Injectable({
  providedIn: 'root'
})
export class SseService {

  eventSource: SSE;

  constructor(private _auth: AuthService, private _messageService: MessageService,
    private zone: NgZone, private _translateService: TranslateService) { }

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

  postSSE(url: string, payload: any): Observable<any> {
    return new Observable((observer) => {
      this.eventSource = this.getEventSourceWithPost(url, payload);
      // Launch query
      this.eventSource.stream();
      // on answer from message listener 
      this.eventSource.onmessage = (event) => {
        this.zone.run(() => {
          observer.next(event.progress);
        });
      };
      this.eventSource.onerror = (error) => {
        this.zone.run(() => {
          observer.error(error);
        });
      };
    });
  }

  closePostConnection() {
    if (!!this.eventSource) {
      this.eventSource.close();
    }
  }

  getEventSourceWithPost(url, data) {
    let eventSource: SSE;
    const options = this.buildOptions('POST', data);
    eventSource = new SSE(url, options);
    eventSource.addEventListener('message', (e) => {
      return e.data;
    });
    return eventSource;
  }

  private buildOptions(meth: string, formData: FormData,): {
    payload: FormData;
    method: string;
    headers: string | { Authorization: string };
  } {
    const auth = 'Bearer ' + this._auth.getToken();
    return {
      payload: formData,
      method: meth,
      headers: auth !== '' ? { Authorization: auth } : '',
    };
  }

}
