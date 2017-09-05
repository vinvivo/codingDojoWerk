import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class ApiService {
  user = { name: "Qanda" };

  constructor(private _http: Http) { }

  login(username) {
    this.user = username;
  }

  getUser() {
    return this.user;
  }

  getAllQuestions() {
    return this._http.get('questions')
      .map(data => data.json())
      .toPromise();
  }

  getOneQuestion(q_id) {
    return this._http.get('/questions/' + q_id)
      .map(data => data.json())
      .toPromise()
  }

  createQuestion(question) {
    this._http.post('/questions', question)
    .map(data => data.json())
    .toPromise();
  }

  createAnswer(answer, q_id) {
    this._http.post('/answers/' + q_id, answer)
      .map(data => data.json())
      .toPromise();
  }

  getAllAnswers(q_id) {
    return this._http.get('/answers/' + q_id)
      .map(data => data.json())
      .toPromise();
  }

  addLike(a_id){
    console.log("addLike ", a_id);
    this._http.get('/answerslikes/' + a_id)
    .map(data => data.json())
    .toPromise();
  }

  destroy(a_id) {
    console.log("api.service.destroy ", a_id);
    this._http.delete('/answers/' + a_id)
    .map(data => data.json())
    .toPromise();
  }
}
