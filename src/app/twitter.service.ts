import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

interface Post {
  title: string;
  body: string;
};

@Injectable()
export class TwitterService {

  constructor(private http: HttpClient) {

    // getData() {
    //   this.http.get(this.url).subscribe(res => {
    //     this.posts = res;
    //   });



  }

}

