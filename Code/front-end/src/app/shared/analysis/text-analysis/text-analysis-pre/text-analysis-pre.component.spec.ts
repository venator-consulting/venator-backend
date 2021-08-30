import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAnalysisPreComponent } from './text-analysis-pre.component';

describe('TextAnalysisPreComponent', () => {
  let component: TextAnalysisPreComponent;
  let fixture: ComponentFixture<TextAnalysisPreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextAnalysisPreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextAnalysisPreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
