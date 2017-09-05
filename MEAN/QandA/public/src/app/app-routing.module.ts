import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AddQuestionComponent } from "./add-question/add-question.component";
import { ShowQuestionComponent } from "./show-question/show-question.component";
import { AddAnswerComponent } from "./add-answer/add-answer.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LoginComponent },
  { path: 'dashboard', pathMatch: 'full', component: DashboardComponent },
  { path: 'new_question', pathMatch: 'full', component: AddQuestionComponent },
  { path: 'question/:id/new_answer', component: AddAnswerComponent },
  { path: 'question/:id', component: ShowQuestionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
