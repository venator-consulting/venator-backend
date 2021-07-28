import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeLiquidityComponent } from './free-liquidity.component';

describe('FreeLiquidityComponent', () => {
  let component: FreeLiquidityComponent;
  let fixture: ComponentFixture<FreeLiquidityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeLiquidityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeLiquidityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
