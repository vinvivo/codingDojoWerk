import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from "./main/main.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { EditComponent } from "./edit/edit.component";
import { CreateComponent } from "./create/create.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', component: MainComponent },
  { path: 'products', pathMatch: 'full', component: ProductListComponent },
  { path: 'products/edit/:id', pathMatch: 'full', component: EditComponent },
  { path: 'products/new', pathMatch: 'full', component: CreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
