import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditorAnalysisCalcComponent } from './creditor-analysis-calc.component';

describe('CreditorAnalysisCalcComponent', () => {
  let component: CreditorAnalysisCalcComponent;
  let fixture: ComponentFixture<CreditorAnalysisCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditorAnalysisCalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditorAnalysisCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
