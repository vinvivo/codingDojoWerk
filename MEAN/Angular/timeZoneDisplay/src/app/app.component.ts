import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'US Time Zone Display';
  currentTime = Date.now();
  time = null;
  clicked = null;

  clickZone(timeZone) {
    console.log("clickZone("+timeZone+")");
    this.time = new Date();
    console.log(this.time.getHours());
    if (timeZone === "Pacific") {
      this.time = this.time.setHours(this.time.getHours());
    } else if (timeZone === "Mountain") {
      this.time = this.time.setHours(this.time.getHours()+1);
    } else if (timeZone === "Central") {
      this.time = this.time.setHours(this.time.getHours()+2);
    } else if (timeZone === "Eastern") {
      this.time = this.time.setHours(this.time.getHours()+3);
    } else if (timeZone === "clear") {
      this.time = null;
    }
    this.clicked = timeZone;
  };

  
}
