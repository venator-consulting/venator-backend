import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { AmountAnalysisDetails } from 'src/app/shared/model/amountAnalysis';
import { AnalysisService } from 'src/app/shared/service/analysis.service';

@Component({
  selector: 'app-details',
  templateUrl: './amount-analysis-details.html',
  styleUrls: ['./amount-analysis-details.sass']
})
export class AmountAnalysisDetailsComponent implements OnInit {

  orgId: number;
  prcId: number;
  creditorNumber: string;
  data: AmountAnalysisDetails[] = new Array();

  constructor(private _route: ActivatedRoute, private _analysisService: AnalysisService) { }

  ngOnInit(): void {
    
    this.orgId = +this._route.snapshot.paramMap.get('orgId');
    this.prcId = +this._route.snapshot.paramMap.get('prcId');
    this.creditorNumber = this._route.snapshot.paramMap.get('creditorNumber');

    this._analysisService
      .getAmountAnalysisDetails(this.orgId, this.prcId, this.creditorNumber)
      .subscribe(res => {
        this.data = res;
      }, er => {});

  }// end of ng on init


}
