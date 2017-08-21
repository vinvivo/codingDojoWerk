import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { routerTransition } from '../animations';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  // for transitions
  animations: [routerTransition],
  host: {'[@routerTransition]': ''}
})
export class PostComponent implements OnInit {

  posts: Array<Post>;   // array of type Post class
  postForm: FormGroup;

  constructor(private _postService: PostService, private formBuilder: FormBuilder, private router: Router) {
    this.postForm = formBuilder.group({
      'title' : [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(75)])],
      'url' : [null, Validators.required],
      'description' : [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
    })
  }

  ngOnInit() {
    this._postService.getPosts()
    .subscribe(res => this.posts = res);
  }

  addPost(post: Post) {
    this._postService.insertPost(post)  // passing in "post" defined in function's argument
      .subscribe(newPost => {           // calling the response object "newPost"
        this.posts.push(newPost);       // push newPost into posts (line 14)
        this.router.navigateByUrl('/');   // re-routes user to home page
      });
  }
}
