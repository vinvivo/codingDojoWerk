import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ApiService } from './api.service';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { ShowQuestionComponent } from './show-question/show-question.component';
import { AddAnswerComponent } from './add-answer/add-answer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AddQuestionComponent,
    ShowQuestionComponent,
    AddAnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
