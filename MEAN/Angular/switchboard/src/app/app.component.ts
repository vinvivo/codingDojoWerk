import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Switchboard';

  switchArray: boolean[] = [];

  fillSwitchArray() {
    for (let i = 0; i < 10; i++) {
      let bools = [ true, false ];
      const randomNum = Math.floor(Math.random() * 2);
      this.switchArray.push(bools[randomNum]);
    }
    console.log(this.switchArray);
  };

  switch(idx) {
    this.switchArray[idx] = !this.switchArray[idx];
  }

  ngOnInit() {
    this.fillSwitchArray();
  }
}
