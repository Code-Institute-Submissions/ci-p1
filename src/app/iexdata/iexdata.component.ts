import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-iexdata',
  templateUrl: './iexdata.component.html',
  styleUrls: ['./iexdata.component.css']
})
export class IexdataComponent implements OnInit {

  constructor(private http: HttpClient){



  }

   ngOnInit(): void {
    this.http.get('https://api.iextrading.com/1.0/stock/aapl/chart/1y').subscribe(data => {
      console.log(data);
    });
  }

}
