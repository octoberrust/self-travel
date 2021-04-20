import { Component, OnInit } from '@angular/core';
import { TripQuery } from '../../state/trip.query';

@Component({
  selector: 'self-travel-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.scss']
})
export class TripDetailComponent implements OnInit {

  constructor(private qry: TripQuery) { }

  ngOnInit(): void {

  }
  get trip$() {
  return this.qry.trips$
}
}
