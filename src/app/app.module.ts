import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TeaListComponent } from './tea-list/tea-list.component';
import { TeaDetailComponent } from './tea-detail/tea-detail.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TeaFormComponent } from './tea-form/tea-form.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
