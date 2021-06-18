import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentAnalysisComponent } from './payment-analysis.component';

describe('PaymentAnalysisComponent', () => {
  let component: PaymentAnalysisComponent;
  let fixture: ComponentFixture<PaymentAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
