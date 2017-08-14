import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  title = 'Retro Barcode Generator';
  // Select a random color from an array of colors
  randomArray: any[] = [];
  // Select a random width from an array of widths
  randomWidthArray: string[] = [];

  randomColorGenerator() {
    for (let i = 0; i < 40; i++) {
      let colors = [
        "lightcoral",
        "lightblue",
        "lightgoldenrodyellow",
        "lightgreen",
        "lightpink",
        "lightsalmon",
        "lightskyblue"
      ];
      const randomNum = Math.floor(Math.random() * colors.length);
      let randomColor = colors[randomNum];
      let randomWidth = Math.floor(Math.random() * 20) + "px";
      let randomResults = {
        color: randomColor,
        width: randomWidth,
      }
      console.log(randomResults);
      this.randomArray.push(randomResults);
    }
  };

  ngOnInit() {
    this.randomColorGenerator();
  }
}
