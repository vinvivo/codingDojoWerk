import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs";

@Injectable()
export class ApiService {

  // If I import Http above, then I need to create an instance of it in my constructor
  constructor(private _http: Http) { }  /* creates an instance of Http object called '_http' that can be used below */

  retrieveUser(username) {  /* this function can be called in app.component.ts */
    return this._http.get(`https://api.github.com/users/${username}`)  // this URL returns an object (see example at the end of this code)
    .map( data => data.json() )
    .toPromise();
  }
}

/*
URL: https://api.github.com/users/keephopealive
returns: 
  {
    "login": "keephopealive",
    "id": 6208387,
    "avatar_url": "https://avatars0.githubusercontent.com/u/6208387?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/keephopealive",
    "html_url": "https://github.com/keephopealive",
    "followers_url": "https://api.github.com/users/keephopealive/followers",
    "following_url": "https://api.github.com/users/keephopealive/following{/other_user}",
    "gists_url": "https://api.github.com/users/keephopealive/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/keephopealive/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/keephopealive/subscriptions",
    "organizations_url": "https://api.github.com/users/keephopealive/orgs",
    "repos_url": "https://api.github.com/users/keephopealive/repos",
    "events_url": "https://api.github.com/users/keephopealive/events{/privacy}",
    "received_events_url": "https://api.github.com/users/keephopealive/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Speros Misirlakis",
    "company": null,
    "blog": "",
    "location": "Bellevue, Washington",
    "email": null,
    "hireable": null,
    "bio": null,
    "public_repos": 94,
    "public_gists": 1,
    "followers": 125,
    "following": 20,
    "created_at": "2013-12-17T18:40:00Z",
    "updated_at": "2017-08-11T16:35:08Z"
  }

*/