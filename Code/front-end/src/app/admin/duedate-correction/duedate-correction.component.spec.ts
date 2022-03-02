import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuedateCorrectionComponent } from './duedate-correction.component';

describe('DuedateCorrectionComponent', () => {
  let component: DuedateCorrectionComponent;
  let fixture: ComponentFixture<DuedateCorrectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuedateCorrectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuedateCorrectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
