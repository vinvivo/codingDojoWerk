import { TestBed, inject } from '@angular/core/testing';

import { TimeZoneServiceService } from './time-zone-service.service';

describe('TimeZoneServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimeZoneServiceService]
    });
  });

  it('should be created', inject([TimeZoneServiceService], (service: TimeZoneServiceService) => {
    expect(service).toBeTruthy();
  }));
});
