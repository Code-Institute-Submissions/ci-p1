// Twitter code snippets from:
//http://thelillysblog.com/2017/02/26/getting-twitter-feed-angular-nodejs/

import { Component } from '@angular/core';
import { Response, RequestOptions, URLSearchParams } from '@angular/http';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
  })
  export class TwitterComponent {
    //  parameter: URLSearchParams = new URLSearchParams();
     tweets: any;

  // constructor(public http: Http) { }
  constructor(private http: HttpClient){}

    //  getTweets(searchTweet:string) {
    //     this.parameter.set('param1', searchTweet);
    //     let requestOptions = new RequestOptions();
    //     requestOptions.search = this.parameter;

        ////////////new for HttpClient
        // const params = new HttpParams().set('page', '1');
        // this.http.get('/api/users', { params });

        // const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        // this.http.get('/api/users', { headers });
        /////////


        /////////

      //   return this.http.get('http://localhost:3000/tweets', requestOptions)
      //     .map((res: Response) => res.json())
      //     .subscribe((res: any) => {
      //       this.tweets = res;
      //     });
      // }
   }
