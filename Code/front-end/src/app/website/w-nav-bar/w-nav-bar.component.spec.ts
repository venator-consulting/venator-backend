import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WNavBarComponent } from './w-nav-bar.component';

describe('WNavBarComponent', () => {
  let component: WNavBarComponent;
  let fixture: ComponentFixture<WNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
