import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AComponentComponent } from './a-component/a-component.component';

// imported by vinVivo
import { FormsModule } from '@angular/forms';  // utilized for Angular forms
import { HttpModule } from '@angular/http';  // utilized for Angular HTTP requests to any API

@NgModule({
  declarations: [
    AppComponent,
    AComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  // include module in our AppModules
    HttpModule // include module in our AppModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
