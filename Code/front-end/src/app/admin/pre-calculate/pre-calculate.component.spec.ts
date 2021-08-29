import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreCalculateComponent } from './pre-calculate.component';

describe('PreCalculateComponent', () => {
  let component: PreCalculateComponent;
  let fixture: ComponentFixture<PreCalculateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreCalculateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreCalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
