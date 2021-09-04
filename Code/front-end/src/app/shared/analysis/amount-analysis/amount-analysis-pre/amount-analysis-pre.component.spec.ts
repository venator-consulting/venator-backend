import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountAnalysisPreComponent } from './amount-analysis-pre.component';

describe('AmountAnalysisPreComponent', () => {
  let component: AmountAnalysisPreComponent;
  let fixture: ComponentFixture<AmountAnalysisPreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmountAnalysisPreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountAnalysisPreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
