import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountAnalysisComponent } from './amount-analysis.component';

describe('AmountAnalysisComponent', () => {
  let component: AmountAnalysisComponent;
  let fixture: ComponentFixture<AmountAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmountAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
