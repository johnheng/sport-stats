import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StatComponent } from './stat.component';
import { StatListComponent } from './stat-list.component';
import { StatFormComponent } from './stat-form.component';
import { MatCardModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule, MatButtonModule, MatSnackBarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StatService } from './stat.service';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule, MatIconRegistry} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    StatComponent,
    StatListComponent,
    StatFormComponent,
  ],
  imports: [
    BrowserModule, 
    MatCardModule, 
    MatFormFieldModule, 
    MatOptionModule, 
    MatSelectModule, 
    MatInputModule, 
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatIconModule
  ],
  providers: [ StatService, MatIconRegistry ],
  bootstrap: [AppComponent]
})
export class AppModule { }
