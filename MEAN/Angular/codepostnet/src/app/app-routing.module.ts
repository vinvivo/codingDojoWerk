import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { PostComponent } from './post/post.component';
import { AnswerComponent } from './answer/answer.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'question/:id', pathMatch: 'full', component: DetailsComponent },
  { path: 'question/:id/new_answer', pathMatch: 'full', component: AnswerComponent },
  { path: 'post', component: PostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
