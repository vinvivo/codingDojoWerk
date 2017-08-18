import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from "./landing/landing.component";
import { SeattleComponent } from "./seattle/seattle.component";
import { SanJoseComponent } from "./san-jose/san-jose.component";
import { BurbankComponent } from "./burbank/burbank.component";
import { DallasComponent } from "./dallas/dallas.component";
import { WashingtonComponent } from "./washington/washington.component";
import { ChicagoComponent } from "./chicago/chicago.component";


const routes: Routes = [
  {
    path: '',   // this is the root route. NOT '/' anymore.
    pathMatch: 'full',  // makes full URL path mandatory
    component: LandingComponent,
    children: []    // children are for creating subdirectories
  },
  { path: 'seattle', pathMatch: 'full', component: SeattleComponent, children: [] },
  { path: 'san-jose', pathMatch: 'full', component: SanJoseComponent, children: [] },
  { path: 'burbank', pathMatch: 'full', component: BurbankComponent, children: [] },
  { path: 'dallas', pathMatch: 'full', component: DallasComponent, children: [] },
  { path: 'washington', pathMatch: 'full', component: WashingtonComponent, children: [] },
  { path: 'chicago', pathMatch: 'full', component: ChicagoComponent, children: [] }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
