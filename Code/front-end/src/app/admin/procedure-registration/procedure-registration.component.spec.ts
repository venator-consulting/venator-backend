import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedureRegistrationComponent } from './procedure-registration.component';

describe('ProcedureRegistrationComponent', () => {
  let component: ProcedureRegistrationComponent;
  let fixture: ComponentFixture<ProcedureRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcedureRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedureRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
