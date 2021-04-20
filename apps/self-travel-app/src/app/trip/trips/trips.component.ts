import { Travel } from '../model/trip-entity.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TripQuery } from '../state/trip.query';
@Component({
  selector: 'self-travel-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss']
})
export class TripsComponent implements OnInit {

  public trips$: Observable<Travel[]>
  constructor(private qry: TripQuery) { }

  ngOnInit(): void {
    this.trips$ = this.qry.trips$;
  }

}
