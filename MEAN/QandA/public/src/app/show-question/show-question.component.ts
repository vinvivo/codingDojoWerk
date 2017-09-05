import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs';

@Component({
  selector: 'app-show-question',
  templateUrl: './show-question.component.html',
  styleUrls: ['./show-question.component.scss']
})
export class ShowQuestionComponent implements OnInit {
  user = {};

  question = {
    _id: 0,
    q_text: "",
    desc: ""
  };

  constructor(private _api: ApiService, private _router: ActivatedRoute) { }

  ngOnInit() {
    this.getOneQuestion();
    this.user = this._api.getUser();
    console.log(this.question);
  }

  getOneQuestion() {
    this._router.paramMap
    .switchMap( params => {
      return this._api.getAllAnswers(params.get('id'))
    })
    .subscribe(data => this.question = data);
  }

  addLike(a_id){
    console.log("Answer ID: ", a_id);
    this._api.addLike(a_id);
    this.getOneQuestion();
  }

  delete(a_id) {
    console.log("Delete ", a_id);
    this._api.destroy(a_id);
    this.getOneQuestion();
  }
}
