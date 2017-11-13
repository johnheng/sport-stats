import { Injectable } from '@angular/core';
import { Stat } from './stat';
import 'rxjs/add/operator/map';

@Injectable()
export class StatService {
  constructor() {}

  private stats: Stat[] = [];

  get() {
    return this.stats;
  }
  
  add(stat: Stat) {
    this.stats.push(stat);
  }
  
  delete(stat: Stat) {
    let statItem = this.stats.find(x => x.text === stat.text);
    let index = this.stats.indexOf(statItem);
    this.stats.splice(index, 1);
  }
}
