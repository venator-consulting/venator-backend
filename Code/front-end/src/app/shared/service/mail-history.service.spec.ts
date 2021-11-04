import { TestBed } from '@angular/core/testing';

import { MailHistoryService } from './mail-history.service';

describe('MailHistoryService', () => {
  let service: MailHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MailHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
