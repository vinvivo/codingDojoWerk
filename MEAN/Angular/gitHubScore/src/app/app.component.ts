import { Component } from '@angular/core';
import { ApiService } from './api.service';   /* since I imported this, I need to create a getter variable instance below in the constructor. The convention is to name getters starting with underscore, e.g., _apiService */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'GitHub Score';
  userExists: boolean = null;
  score: number = null;
  username: string = null;
  promise;    // declare this ahead of time to use it later... idk why??

  constructor(private _apiService: ApiService) {}   // _apiService will give me access to the functions in api.service.ts

  calculateScore() {    // this function is available to this component's template
    this.promise = this._apiService.retrieveUser(this.username);
    if(this.promise) {
      this.promise.then( user => {    // parentheses on (use) are optional when only one parameter
        if(user.id) {   // see user object structure at end of code
          this.userExists = true;
          this.score = user.public_repos + user.followers;
        } else {
          this.userExists = false;
          this.score = null;
        }
        this.username = null;
        // console.log(this.username);
      })
      .catch( err => {
        this.userExists = false;
      });
    } else {
      this.userExists = false;
    }
  }
}


/* 
  Arrow functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

    Basic syntax: (param1, param2, ..., paramN) => { statements }

                  (param1, param2, ..., paramN) => expression
                  is equivalent to: (param1, param2, ..., paramN) => { return expression; }
 */

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