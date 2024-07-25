import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ContadorComponent } from './contador/contador.component';
import { HijoComponent } from './hijo/hijo.component';
import { PadreComponent } from './padre/padre.component';
import { FormsModule } from '@angular/forms';
import { HermanoComponent } from './hermano/hermano.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    HijoComponent,
    PadreComponent,
    HermanoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
