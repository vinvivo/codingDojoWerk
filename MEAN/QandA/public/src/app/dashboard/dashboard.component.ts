import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user = {};
  questions = [];

  constructor(private _api: ApiService) { }

  ngOnInit() {
    this.user = this._api.getUser();    // for welcome message
    this.getAll();
  }

  getAll() {
    this._api.getAllQuestions()
      .then(data => this.questions = data)
      .catch(errors => {console.log(errors)});
  }

}
