import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationRegistrationComponent } from './organisation-registration.component';

describe('OrganisationRegistrationComponent', () => {
  let component: OrganisationRegistrationComponent;
  let fixture: ComponentFixture<OrganisationRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganisationRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisationRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
