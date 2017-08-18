import { Component, OnInit } from '@angular/core';
import { WeatherAPIService } from './../weather-api.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  title = "Dallas, TX";
  cityName: string = null;
  humidity: number = null;
  tempAvg: number = null;
  tempHi: number = null;
  tempLo: number = null;
  weatherStatus: string = null;
  weather;

  constructor(private _weatherAPI: WeatherAPIService) {}

  ngOnInit() {
    this.weather = this._weatherAPI.findWeather('dallas');
    if(this.weather) {
      this.weather.then( location => {
        console.log(location);
        this.humidity = location.main.humidity;
        this.weatherStatus = location.weather[0].description;
        this.tempAvg = Math.round(location.main.temp * (9/5) - 459.67);
        this.tempHi = Math.round(location.main.temp_max * (9/5) - 459.67);
        this.tempLo = Math.round(location.main.temp_min * (9/5) - 459.67);
      })
    }
  }

}