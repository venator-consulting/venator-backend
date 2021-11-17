import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailAnalysisSenderDetailsComponent } from './mail-analysis-sender-details.component';

describe('MailAnalysisSenderDetailsComponent', () => {
  let component: MailAnalysisSenderDetailsComponent;
  let fixture: ComponentFixture<MailAnalysisSenderDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailAnalysisSenderDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailAnalysisSenderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
