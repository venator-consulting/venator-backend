import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { PreCalculateService } from '../service/pre-calculate.service';

@Component({
  selector: 'app-record-matching',
  templateUrl: './record-matching.component.html',
  styleUrls: ['./record-matching.component.sass']
})
export class RecordMatchingComponent implements OnInit {

  orgId: number;
  prcId: number;
  progress = 0;

  constructor(private _preCalcService: PreCalculateService, private _messageService: MessageService,
    private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.orgId = +localStorage.getItem('organisationId');
    this.prcId = +localStorage.getItem('currentProcedureId');

    this._preCalcService.returnAsObservable().subscribe((data: any) => {
      console.log(data);
      debugger;
      data = data.length == [] ? { progress: 0 } : JSON.parse(data);
      this.progress = data.progress;
      // if progress 100 close connection
      if (this.progress == 100) this._preCalcService.stopSSE();
      this.changeDetectorRef.detectChanges();
    });
  }

  linkTransStart() {
    this._preCalcService.linkTransactions(this.orgId, this.prcId);
  }

}
