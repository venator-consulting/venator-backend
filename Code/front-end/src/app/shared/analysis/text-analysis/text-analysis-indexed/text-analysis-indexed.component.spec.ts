import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAnalysisIndexedComponent } from './text-analysis-indexed.component';

describe('TextAnalysisIndexedComponent', () => {
  let component: TextAnalysisIndexedComponent;
  let fixture: ComponentFixture<TextAnalysisIndexedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextAnalysisIndexedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextAnalysisIndexedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
