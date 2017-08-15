import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SwitchboardComponentComponent } from './switchboard-component/switchboard-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SwitchboardComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
