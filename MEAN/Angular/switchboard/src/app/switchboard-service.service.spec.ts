import { TestBed, inject } from '@angular/core/testing';

import { SwitchboardServiceService } from './switchboard-service.service';

describe('SwitchboardServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SwitchboardServiceService]
    });
  });

  it('should be created', inject([SwitchboardServiceService], (service: SwitchboardServiceService) => {
    expect(service).toBeTruthy();
  }));
});
