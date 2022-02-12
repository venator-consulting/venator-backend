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

  constructor(private _preCalcService: PreCalculateService, private _messageService: MessageService) { }

  ngOnInit(): void {
    this.orgId = +localStorage.getItem('organisationId');
    this.prcId = +localStorage.getItem('currentProcedureId');
  }

  linkTransStart() {
    this._preCalcService.linkTransactions(this.orgId, this.prcId)
      .subscribe((data: any) => {
        this.progress = data.progress;
        if (this.progress >= 100) {
          this._messageService.add({
            severity: 'success',
            detail: "Record matching done!"
          });
        }
      });
  }

}
