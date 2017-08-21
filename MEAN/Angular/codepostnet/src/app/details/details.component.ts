import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';
import { Router, ActivatedRoute } from '@angular/router';  // ActivatedRoute enables getting id from URL

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
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

}
