import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule, Input, Output } from '@angular/core';
import { Stat } from './stat';
@Component({
    selector: 'stats',
    templateUrl: './stat-list.component.html',
    styleUrls: []
})

export class StatListComponent {
    stats: Stat[];
    @Input() number: number;
    @Output() counter;

    ngOnInit() {
        this.stats = [
            {
                text: "Pass",
                value: 123
            },
            {
                text: "Miscommunication",
                value: 3
            },
            {
                text: "Set",
                value: 23
            },
            {
                text: "Serve",
                value: 23
            },
            {
                text: "Spikes/Hits",
                value: 23
            },
        ];
    }
}



