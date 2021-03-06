import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule, Input, Output, EventEmitter } from '@angular/core';
import { Stat } from './stat';
import { StatService} from './stat.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./app.component.css', './stat.component.css']
})


export class StatComponent {
  constructor(private statService: StatService) {}
  title = 'app';
  @Input() stat: Stat;
  @Output() delete = new EventEmitter();
  @Output() edit = new EventEmitter();

  ngOnInit() {
    this.stat.value = 0;
  }

  onDelete() {
    console.log(this.stat);
    this.delete.emit(this.stat);
  }

  onEdit(value: string) {
    if(this.stat.text !== value)
    {
      this.edit.emit(value);
    }
    this.statService.edit(this.stat, value);
  }

  increment() {
    this.stat.value++;
  }

  decrement() {
    this.stat.value--;
  }
}
