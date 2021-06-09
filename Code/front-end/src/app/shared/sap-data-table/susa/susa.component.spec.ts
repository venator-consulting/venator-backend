import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SusaComponent } from './susa.component';

describe('SusaComponent', () => {
  let component: SusaComponent;
  let fixture: ComponentFixture<SusaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SusaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SusaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
