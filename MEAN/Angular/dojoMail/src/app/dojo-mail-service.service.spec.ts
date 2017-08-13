import { TestBed, inject } from '@angular/core/testing';

import { DojoMailServiceService } from './dojo-mail-service.service';

describe('DojoMailServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DojoMailServiceService]
    });
  });

  it('should be created', inject([DojoMailServiceService], (service: DojoMailServiceService) => {
    expect(service).toBeTruthy();
  }));
});
