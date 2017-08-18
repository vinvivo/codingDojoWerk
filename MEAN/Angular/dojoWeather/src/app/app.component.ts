import { Component } from '@angular/core';
import { WeatherAPIService } from './weather-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Dojo Weather Forecast';
}

/* 
  {
    "coord":
      { "lon":-122.33, "lat":47.61 },
    "weather":[
      {
        "id":800,
        "main":"Clear",
        "description":"clear sky",
        "icon":"01n"
      }],
    "base":"stations",
    "main":
      {
        "temp":297.13,
        "pressure":1020,
        "humidity":47,
        "temp_min":295.15,
        "temp_max":299.15
      },
    "visibility":16093,
    "wind": { "speed":2.6, "deg":330 },
    "clouds": { "all":1 },
    "dt":1503017580,
    "sys":
      {
        "type":1,
        "id":2948,
        "message":0.009,
        "country":"US",
        "sunrise":1503061782,
        "sunset":1503112526
      },
    "id":5809844,
    "name":"Seattle",
    "cod":200
  }
 */