import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailHistoryDataComponent } from './mail-history-data.component';

describe('MailHistoryDataComponent', () => {
  let component: MailHistoryDataComponent;
  let fixture: ComponentFixture<MailHistoryDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailHistoryDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailHistoryDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
