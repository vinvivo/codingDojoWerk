import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { routerTransition } from '../animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // for transitions
  animations: [routerTransition],
  host: {'[@routerTransition]': ''}
})
export class LoginComponent implements OnInit {

  posts: Array<Post>;   // array of type Post class
  postForm: FormGroup;

  constructor(private _postService: PostService, private formBuilder: FormBuilder, private router: Router) {
    this.postForm = formBuilder.group({
      'user' : [null, Validators.required],
    });
  }

  ngOnInit() {
  }

  // addPost(post: Post) {
  //   this._postService.insertPost(post)  // passing in "post" defined in function's argument
  //     .subscribe(newPost => {           // calling the response object "newPost"
  //       this.posts.push(newPost);       // push newPost into posts (line 14)
  //       this.router.navigateByUrl('/');   // re-routes user to home page
  //     });
  // }
}
