import { Component, Input, Output, ElementRef, ViewChild, EventEmitter } from '@angular/core';
import { Stat } from './stat';
@Component({
  selector: 'inline-edit',
  templateUrl: './inline-edit.component.html',
  styleUrls: ['./inline-edit.component.css']
})

export class InlineEditComponent {
  constructor(element: ElementRef) {}

  @ViewChild('inlineEditControl') inlineEditControl: ElementRef;
  @Input() stat: Stat;
  private editing: boolean = false;
  @Output() update = new EventEmitter();

  onBlur($event: Event) {
    this.editing = false;
    this.update.emit(this.inlineEditControl.nativeElement.value);
  }

  edit() {
    this.editing = true;
    setTimeout(_ => this.inlineEditControl.nativeElement.focus());
  }
}