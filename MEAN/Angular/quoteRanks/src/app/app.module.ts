import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { QuoteCreateComponent } from './quote-create/quote-create.component';
import { QuoteListComponent } from './quote-list/quote-list.component';
import { OrderbyPipe } from './orderby.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuoteCreateComponent,
    QuoteListComponent,
    OrderbyPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
