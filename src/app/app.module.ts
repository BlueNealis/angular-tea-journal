import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TeaListComponent } from './tea-list/tea-list.component';
import { TeaDetailComponent } from './tea-detail/tea-detail.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TeaFormComponent } from './tea-form/tea-form.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { FormsModule } from '@angular/forms';
import { TeaDataService } from './services/teaData.service';
import {Routes, RouterModule } from '@angular/router'

const appRoutes: Routes = [{path: 'tea-form', component: TeaFormComponent }, 
{path: '', component: TeaListComponent},
{path: 'shopping-list', component: ShoppingListComponent},]

@NgModule({
  declarations: [
    AppComponent,
    TeaListComponent,
    TeaDetailComponent,
    NavBarComponent,
    TeaFormComponent,
    ShoppingListComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(appRoutes),
  ],
  providers:[TeaDataService,],
  bootstrap: [AppComponent]
})

export class AppModule { }
