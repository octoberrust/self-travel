import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import * as state from './trip.store';

@Injectable()
export class TripQuery extends Query<state.TripState> {

  constructor(protected store: state.TripStore) {
    super(store);
  }
  trips$ = this.select(state => state.trips);
  selected$ = this.select(state => state.selcted);

}
