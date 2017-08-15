import { TestBed, inject } from '@angular/core/testing';

import { QuoteRanksServiceService } from './quote-ranks-service.service';

describe('QuoteRanksServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuoteRanksServiceService]
    });
  });

  it('should be created', inject([QuoteRanksServiceService], (service: QuoteRanksServiceService) => {
    expect(service).toBeTruthy();
  }));
});
