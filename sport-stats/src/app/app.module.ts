import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StatComponent } from './stat.component';
import { StatListComponent } from './stat-list.component';
import { StatFormComponent } from './stat-form.component';
import { MatCardModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule, MatButtonModule, MatSnackBarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StatService } from './stat.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatIconModule, MatIconRegistry} from '@angular/material';
import { InlineEditComponent } from './inline-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    StatComponent,
    StatListComponent,
    StatFormComponent,
    InlineEditComponent
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
    MatIconModule,
    FormsModule
  ],
  providers: [ StatService, MatIconRegistry ],
  bootstrap: [AppComponent]
})
export class AppModule { }
