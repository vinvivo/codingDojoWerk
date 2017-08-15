import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration';

  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConf: '',
    street: '',
    city: '',
    state: '',
    lucky: ''
  };

  onSubmit() {
    console.log("onSubmit()");
    console.log(this.user);
    this.user = {   // create a clean slate for next user
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConf: '',
      street: '',
      city: '',
      state: '',
      lucky: ''
    }
  }

}
