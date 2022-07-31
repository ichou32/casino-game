import { TestBed } from '@angular/core/testing';

import { GameFeedService } from './game-feed.service';

describe('GameFeedService', () => {
  let service: GameFeedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameFeedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
