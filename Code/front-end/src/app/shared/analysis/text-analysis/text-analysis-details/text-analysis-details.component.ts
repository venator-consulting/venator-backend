import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { TextAnalysisDetails } from 'src/app/shared/model/textAnalysis';
import { AnalysisService } from 'src/app/shared/service/analysis.service';

@Component({
  selector: 'app-text-analysis-details',
  templateUrl: './text-analysis-details.component.html',
  styleUrls: ['./text-analysis-details.component.sass']
})
export class TextAnalysisDetailsComponent implements OnInit {

  orgId: number;
  prcId: number;
  accountNumber: string;
  data: TextAnalysisDetails[] = new Array();

  constructor(private _route: ActivatedRoute, private _analysisService: AnalysisService) { }

  ngOnInit(): void {
    this.orgId = +this._route.snapshot.paramMap.get('orgId');
    this.prcId = +this._route.snapshot.paramMap.get('prcId');
    this.accountNumber = this._route.snapshot.paramMap.get('accountNumber');

    this._analysisService
      .getTextAnalysisDetails(this.orgId, this.prcId, this.accountNumber)
      .subscribe(res => {
        this.data = res;
      }, er => {});
  }

}
