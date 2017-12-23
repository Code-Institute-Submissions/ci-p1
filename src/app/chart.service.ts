import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

// var cors = require('cors')
// import 'cors';

@Injectable()
export class ChartService {

    constructor(private _http: HttpClient) { }

    // this._http.use(cors())

    chart1y() {
      // return this._http.get("http://samples.openweathermap.org/data/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22")
      return this._http.get("https://api.iextrading.com/1.0/stock/aapl/chart/1y")
        .map(result => result);

    }

  }
