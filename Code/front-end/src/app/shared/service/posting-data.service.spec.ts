import { TestBed } from '@angular/core/testing';

import { PostingDataService } from './posting-data.service';

describe('PostingDataService', () => {
  let service: PostingDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostingDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
