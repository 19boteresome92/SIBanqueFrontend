import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientFormComponent } from './client/client-form/client-form.component';
import { ClientListComponent } from './client/client-list/client-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientFormComponent,
    ClientListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
