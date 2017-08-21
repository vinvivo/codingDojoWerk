import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';   // reactive extensions map operator allows us to translate result from API to JSON data

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
}
