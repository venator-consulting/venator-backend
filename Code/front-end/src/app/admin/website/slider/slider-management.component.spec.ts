import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderManagementComponent } from './slider-management.component';

describe('SliderComponent', () => {
  let component: SliderManagementComponent;
  let fixture: ComponentFixture<SliderManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
