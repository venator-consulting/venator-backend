import { TestBed } from '@angular/core/testing';

import { UserPrefernecesService } from './user-preferneces.service';

describe('UserPrefernecesService', () => {
  let service: UserPrefernecesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserPrefernecesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
