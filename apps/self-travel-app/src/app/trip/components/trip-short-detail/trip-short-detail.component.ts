import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'self-travel-trip-short-detail',
  templateUrl: './trip-short-detail.component.html',
  styleUrls: ['./trip-short-detail.component.scss']
})
export class TripShortDetailComponent implements OnInit {

  @Input() set entity(val: any) {
    this._val = null;
    this._keys = [];
    this.rows = [];
    this._keys =Object.keys(val).filter(key => key !== 'id');
    //  this._capKeys = this._keys.map(k => this.capitalize(k));
   // let j = [];


    let i, j;//, temparray;
      const chunk = 3;
    for (i = 0, j = this._keys.length; i < j; i += chunk) {
     const temparray = this._keys.slice(i, i + chunk);
      this.rows.push([...temparray]);
    }

  //   for (let index = 2; index < this._keys.length; index+=2) {
  //     const element = this._keys[index];


  //     j.push(this._keys[index-2]);
  //     j.push(this._keys[index-1]);
  //     j.push(this._keys[index]);
  //     if (index > 0 && index % 3 === 0) {
  //       this.rows.push([...j]);
  //       j = [];
  //     }
  //   }
    this._val = val;
   }
  public rows: Array<string[]> = [];
  public _val: unknown;
  public _keys: string[] = [];
  //  public _capKeys: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  track(index, hero) {
    console.log(hero);
    return index % 3 === 0 ? hero : undefined;

  }
  // private capitalize(string, downCaseTail = false): string {
  //   return `${string.charAt(0).toUpperCase()}${downCaseTail ? string.slice(1).toLowerCase() : string.slice(1)}`;
  // }
}
