import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';
import { Router, ActivatedRoute } from '@angular/router';  // ActivatedRoute enables getting id from URL
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { routerTransition } from '../animations';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss'],
  // for transitions
  animations: [routerTransition],
  host: {'[@routerTransition]': ''}
})
export class AnswerComponent implements OnInit {

  post: Array<Post>;   // array of type Post class
  postForm: FormGroup;

  constructor(private _postService: PostService, private formBuilder: FormBuilder, private router: ActivatedRoute) {
    this.postForm = formBuilder.group({
      'answer' : [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      'support' : [null, null],
    })
  }

  ngOnInit() {
    this.router.params.subscribe( (params) => {

      let id = params['id'];    // id comes from app-routing.module.ts ":id"

      this._postService.getPost(id)
        .subscribe( res => this.post = res);
    });
  }

  editPost(post: Post) {
    this._postService.updatePost(post)  // passing in "post" defined in function's argument
      .subscribe(newPost => {           // calling the response object "newPost"
        this.post.push(newPost);       // push newPost into posts (line 14)
        this.router.navigateByUrl('/');   // re-routes user to home page
      });
  }
}
