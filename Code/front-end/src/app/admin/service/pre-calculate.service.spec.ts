import { TestBed } from '@angular/core/testing';

import { PreCalculateService } from './pre-calculate.service';

describe('PreCalculateService', () => {
  let service: PreCalculateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreCalculateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
