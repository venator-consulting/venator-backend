import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentDetailsMonthComponent } from './payment-details-month.component';

describe('PaymentDetailsMonthComponent', () => {
  let component: PaymentDetailsMonthComponent;
  let fixture: ComponentFixture<PaymentDetailsMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentDetailsMonthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentDetailsMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
