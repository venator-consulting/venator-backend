import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditorAnalysisDetailsComponent } from './creditor-analysis-details.component';

describe('CreditorAnalysisDetailsComponent', () => {
  let component: CreditorAnalysisDetailsComponent;
  let fixture: ComponentFixture<CreditorAnalysisDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditorAnalysisDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditorAnalysisDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
