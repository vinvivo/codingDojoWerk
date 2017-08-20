import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ProductListComponent } from './product-list/product-list.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { ProductService } from './product.service';

// using Material design
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// tslint:disable-next-line:max-line-length
import { MdInputModule, MdGridListModule, MdCardModule, MdTabsModule, MdButtonModule, MdIconModule, MdProgressBarModule, MdSortModule, MdMenuModule, MdToolbarModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProductListComponent,
    EditComponent,
    CreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdInputModule, MdGridListModule, MdCardModule, MdTabsModule, MdButtonModule, MdIconModule, MdProgressBarModule, MdSortModule,
    MdMenuModule,
    MdToolbarModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
