import { TestBed, inject } from '@angular/core/testing';

import { AServiceService } from './a-service.service';

describe('AServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AServiceService]
    });
  });

  it('should be created', inject([AServiceService], (service: AServiceService) => {
    expect(service).toBeTruthy();
  }));
});
