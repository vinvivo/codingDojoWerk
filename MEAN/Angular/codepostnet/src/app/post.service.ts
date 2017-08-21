import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';   // reactive extensions map operator allows us to translate result from API to JSON data
import { Post } from './post';

@Injectable()
export class PostService {

  result: any;

  constructor(private _http: Http) { }

  getPosts() {
    return this._http.get("/api/posts")   // route name comes from /api in server.js + /posts in api.js
      .map( result => this.result = result.json());
  }

  getPost(id) {
    return this._http.get("/api/details/" + id)   // route name comes from /api in server.js + /posts in api.js
      .map( result => this.result = result.json());
  }

  insertPost(post: Post) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post('/api/posts', JSON.stringify(post), options)
      .map( result => this.result = result.json());
  }
}
