import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs';

@Component({
  selector: 'app-add-answer',
  templateUrl: './add-answer.component.html',
  styleUrls: ['./add-answer.component.scss']
})
export class AddAnswerComponent implements OnInit {
  question = {
    _id: 0,
    q_text: "",
    desc: ""
  };
  answer = {
    user: "",
    likes: 0
  };

  constructor(private _api: ApiService, private _router: ActivatedRoute) { }

  ngOnInit() {
    this.getOneQuestion();
    this.getUser();
  }

  getUser() {
    this.answer.user = this._api.getUser().name;
  }

  getOneQuestion() {
    this._router.paramMap
    .switchMap( params => {
      return this._api.getOneQuestion(params.get('id'));
    })
    .subscribe(data => this.question = data);
  }

  onSubmit() {
    this._api.createAnswer(this.answer, this.question._id);
  }
}
