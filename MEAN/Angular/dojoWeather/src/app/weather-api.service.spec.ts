import { TestBed, inject } from '@angular/core/testing';

import { WeatherAPIService } from './weather-api.service';

describe('WeatherAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherAPIService]
    });
  });

  it('should be created', inject([WeatherAPIService], (service: WeatherAPIService) => {
    expect(service).toBeTruthy();
  }));
});
