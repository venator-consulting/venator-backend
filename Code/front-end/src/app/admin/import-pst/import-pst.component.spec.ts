import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportPstComponent } from './import-pst.component';

describe('ImportPstComponent', () => {
  let component: ImportPstComponent;
  let fixture: ComponentFixture<ImportPstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportPstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportPstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
