import { TestBed, inject } from '@angular/core/testing';

import { RetroBarServiceService } from './retro-bar-service.service';

describe('RetroBarServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RetroBarServiceService]
    });
  });

  it('should be created', inject([RetroBarServiceService], (service: RetroBarServiceService) => {
    expect(service).toBeTruthy();
  }));
});
