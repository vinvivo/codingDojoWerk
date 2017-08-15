import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.css']
})
export class NavListComponent implements OnInit {
  @Input() myLinks;   // expecting an attribute called 'myLinks' in the parent html file
  @Output() myEvent = new EventEmitter();   // create an event called myEvent

  constructor() { }

  callParent() {
    this.myEvent.emit(7); // clicking button on component's template 
  }                       // will call this function and pass value of 7.
                          // This will invoke myEvent (line 10), which 
                          // emits an event to the element that loads it in
                          // parent template, which will call the invoke()
                          // function in parent component.

  ngOnInit() {
  }

}
