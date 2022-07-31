import { TestBed } from '@angular/core/testing';

import { JackpotFeedService } from './jackpot-feed.service';

describe('JackpotFeedService', () => {
  let service: JackpotFeedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JackpotFeedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
