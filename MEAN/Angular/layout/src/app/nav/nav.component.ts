import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  links = [
    {title: "Link 1", source: "/"},
    {title: "Link 2", source: "/"},
    {title: "Link 3", source: "/"},
  ];

  invoked(event){   // invoked function is expecting an event input from its template
    console.log("Invoked()", event);
  };

  constructor() { }

  ngOnInit() {
  }

}
