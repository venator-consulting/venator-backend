import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailAnalysisComponent } from './mail-analysis.component';

describe('MailAnalysisComponent', () => {
  let component: MailAnalysisComponent;
  let fixture: ComponentFixture<MailAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
