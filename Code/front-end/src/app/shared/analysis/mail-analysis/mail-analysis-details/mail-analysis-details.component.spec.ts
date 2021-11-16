import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailAnalysisDetailsComponent } from './mail-analysis-details.component';

describe('MailAnalysisDetailsComponent', () => {
  let component: MailAnalysisDetailsComponent;
  let fixture: ComponentFixture<MailAnalysisDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailAnalysisDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailAnalysisDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
