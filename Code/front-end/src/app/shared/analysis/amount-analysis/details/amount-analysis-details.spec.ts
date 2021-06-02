import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountAnalysisDetailsComponent } from './amount-analysis-details.component';

describe('AmountAnalysisDetailsComponent', () => {
  let component: AmountAnalysisDetailsComponent;
  let fixture: ComponentFixture<AmountAnalysisDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmountAnalysisDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountAnalysisDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
