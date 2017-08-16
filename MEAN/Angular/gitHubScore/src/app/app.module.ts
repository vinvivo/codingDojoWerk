import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GitHubScoreComponent } from './git-hub-score/git-hub-score.component';

@NgModule({
  declarations: [
    AppComponent,
    GitHubScoreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
