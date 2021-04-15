import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordNewUserComponent } from './reset-password-new-user.component';

describe('ResetPasswordNewUserComponent', () => {
  let component: ResetPasswordNewUserComponent;
  let fixture: ComponentFixture<ResetPasswordNewUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetPasswordNewUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPasswordNewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
