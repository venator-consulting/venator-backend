import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentAnalysisDetailsComponent } from './payment-analysis-details.component';

describe('PaymentAnalysisDetailsComponent', () => {
  let component: PaymentAnalysisDetailsComponent;
  let fixture: ComponentFixture<PaymentAnalysisDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentAnalysisDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentAnalysisDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
