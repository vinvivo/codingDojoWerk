import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs";

@Injectable()
export class WeatherAPIService {

  constructor(private _http: Http) { }

  findWeather(cityName: string) {
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName},us&appid=7ba98c40fb4b469f9002ede98e72127b`)
    .map( data => data.json() )
    .toPromise();
  }
}

/* 
  {"coord":{"lon":-122.33,"lat":47.61},
  "weather":[{"id":800,"main":"Clear",
  "description":"clear sky","icon":"01n"}],
  "base":"stations","main":{"temp":297.13,"pressure":1020,"humidity":47,"temp_min":295.15,"temp_max":299.15},"visibility":16093,"wind":{"speed":2.6,"deg":330},"clouds":{"all":1},"dt":1503017580,"sys":{"type":1,"id":2948,"message":0.009,"country":"US","sunrise":1503061782,"sunset":1503112526},"id":5809844,"name":"Seattle","cod":200}
 */
