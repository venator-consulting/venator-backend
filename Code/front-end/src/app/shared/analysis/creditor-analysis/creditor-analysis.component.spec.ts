import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditorAnalysisComponent } from './creditor-analysis.component';

describe('CreditorAnalysisComponent', () => {
  let component: CreditorAnalysisComponent;
  let fixture: ComponentFixture<CreditorAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditorAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditorAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
