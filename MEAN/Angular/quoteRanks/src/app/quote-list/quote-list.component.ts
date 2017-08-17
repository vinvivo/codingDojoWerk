import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {
  @Input() quotes;
  @Output() deleteQuoteEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  voteUp(quote) {
    quote.rating++;
  }

  voteDown(quote) {
    quote.rating--;
  }

  delete(quote) {
    this.deleteQuoteEvent.emit(quote);
  }

}