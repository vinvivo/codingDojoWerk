import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimeZoneComponentComponent } from './time-zone-component/time-zone-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeZoneComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
