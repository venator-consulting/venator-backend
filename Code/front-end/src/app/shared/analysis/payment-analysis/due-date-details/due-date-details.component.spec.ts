import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DueDateDetailsComponent } from './due-date-details.component';

describe('DueDateDetailsComponent', () => {
  let component: DueDateDetailsComponent;
  let fixture: ComponentFixture<DueDateDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DueDateDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DueDateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
