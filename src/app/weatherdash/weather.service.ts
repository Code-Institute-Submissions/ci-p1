import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

    constructor(private _http: HttpClient) { }

    dailyForecast() {
      // return this._http.get("http://samples.openweathermap.org/data/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22")
      return this._http.get("http://api.openweathermap.org/data/2.5/forecast?q=Dublin,ie&units=metric&appid=85ab77f5c363d067d38e72532a8ef9f8")
        .map(result => result);
    }

  }
