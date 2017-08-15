import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuoteRanksComponentComponent } from './quote-ranks-component/quote-ranks-component.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteRanksComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
