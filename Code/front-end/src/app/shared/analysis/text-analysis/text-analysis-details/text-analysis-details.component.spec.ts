import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAnalysisDetailsComponent } from './text-analysis-details.component';

describe('TextAnalysisDetailsComponent', () => {
  let component: TextAnalysisDetailsComponent;
  let fixture: ComponentFixture<TextAnalysisDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextAnalysisDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextAnalysisDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
