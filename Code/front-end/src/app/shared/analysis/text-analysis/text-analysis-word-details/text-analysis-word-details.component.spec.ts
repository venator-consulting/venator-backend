import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAnalysisWordDetailsComponent } from './text-analysis-word-details.component';

describe('TextAnalysisWordDetailsComponent', () => {
  let component: TextAnalysisWordDetailsComponent;
  let fixture: ComponentFixture<TextAnalysisWordDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextAnalysisWordDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextAnalysisWordDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
