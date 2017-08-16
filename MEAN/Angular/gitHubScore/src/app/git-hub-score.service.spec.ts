import { TestBed, inject } from '@angular/core/testing';

import { GitHubScoreService } from './git-hub-score.service';

describe('GitHubScoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitHubScoreService]
    });
  });

  it('should be created', inject([GitHubScoreService], (service: GitHubScoreService) => {
    expect(service).toBeTruthy();
  }));
});
