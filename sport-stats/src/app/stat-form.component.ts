import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule, Input } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { StatService } from './stat.service';
import { Stat } from './stat';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'stat-form',
  templateUrl: './stat-form.component.html',
  styleUrls: ['./app.component.css']
})

export class StatFormComponent {
  form;
  
  constructor(
    private formBuilder: FormBuilder,
    private statService: StatService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      text: this.formBuilder.control('', Validators.compose([
        Validators.required
      ]))
    });
  }

  onSubmit(stat: Stat) {
    console.log(stat);
    this.statService.add(stat);
    this.snackBar.open("'" + stat.text +  "' was added.", null, {
      duration: 1000,
    });    
    this.form.reset();
  }
}
