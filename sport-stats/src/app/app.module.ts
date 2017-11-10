import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StatComponent } from './stat.component';
import { MatCardModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    StatComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
