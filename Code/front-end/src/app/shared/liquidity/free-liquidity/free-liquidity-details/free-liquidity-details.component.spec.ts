import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeLiquidityDetailsComponent } from './free-liquidity-details.component';

describe('FreeLiquidityDetailsComponent', () => {
  let component: FreeLiquidityDetailsComponent;
  let fixture: ComponentFixture<FreeLiquidityDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeLiquidityDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeLiquidityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
