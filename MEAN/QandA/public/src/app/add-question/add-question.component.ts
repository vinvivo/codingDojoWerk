import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {
  question = {};

  constructor(private _api: ApiService) { }

  ngOnInit() {
  }

  onSubmit() {
    this._api.createQuestion(this.question);
  }
}
