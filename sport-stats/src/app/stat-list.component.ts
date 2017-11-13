import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule, Input, Output } from '@angular/core';
import { Stat } from './stat';
import { StatService } from './stat.service';
import { MatSnackBar } from '@angular/material';
@Component({
    selector: 'stats',
    templateUrl: './stat-list.component.html',
    styleUrls: ['./app.component.css']
})

export class StatListComponent {
    constructor(private statService: StatService, private snackBar: MatSnackBar) { }
    stats: Stat[];

    ngOnInit() {
        this.stats = this.statService.get();
    }

    onStatDelete(stat) {
        this.statService.delete(stat);
        this.snackBar.open("Successfully deleted '" + stat.text + "'.", null, {
            duration: 1000,
        });  
        this.getStats();
    }

    getStats() {
        this.stats = this.statService.get();
    }
}
