import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SAPDataTableComponent } from './sap-data-table.component';

describe('SAPDataTableComponent', () => {
  let component: SAPDataTableComponent;
  let fixture: ComponentFixture<SAPDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SAPDataTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SAPDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
