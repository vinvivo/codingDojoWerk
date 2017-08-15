import { TestBed, inject } from '@angular/core/testing';

import { LayoutServiceService } from './layout-service.service';

describe('LayoutServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LayoutServiceService]
    });
  });

  it('should be created', inject([LayoutServiceService], (service: LayoutServiceService) => {
    expect(service).toBeTruthy();
  }));
});
