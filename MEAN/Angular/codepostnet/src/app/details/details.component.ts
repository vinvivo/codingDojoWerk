import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';
import { Router, ActivatedRoute } from '@angular/router';  // ActivatedRoute enables getting id from URL
import { routerTransition } from '../animations';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  // for transitions
  animations: [routerTransition],
  host: {'[@routerTransition]': ''}
})
export class DetailsComponent implements OnInit {

  post: Array<Post>;

  constructor(private _postService: PostService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe( (params) => {

      let id = params['id'];    // id comes from app-routing.module.ts ":id"

      this._postService.getPost(id)
        .subscribe( res => this.post = res);
    });
  }

  like(post, idx) {
    post.response[idx].likes++;
    console.log(post.response[idx].likes);
  }

}
