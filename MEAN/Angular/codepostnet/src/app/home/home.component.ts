import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';  // bring in Post service
import { Post } from '../post';   // bring in Post class
import { routerTransition } from '../animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // for transitions
  animations: [routerTransition],
  host: {'[@routerTransition]': ''}
})
export class HomeComponent implements OnInit {

    posts: Array<Post>;

    constructor(private _postService: PostService) { }

    ngOnInit() {
      this._postService.getPosts()
        .subscribe(res => this.posts = res);
    }

    like(post) {
      post.likes++;
      console.log(post.likes);
    }

  }
