import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule, Input } from '@angular/core';
import { Stat } from './stat';

@Component({
  selector: 'stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})


export class StatComponent {
  title = 'app';
  @Input() stat: Stat;
}
