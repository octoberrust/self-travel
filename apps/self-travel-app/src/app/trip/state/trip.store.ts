import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { sampleTrips, Travel } from '../model/trip-entity.model';

export interface TripState {
  key: string;
  trips: Travel[];
  selcted: Travel;
}

export function createInitialState(): TripState {
  return {
    key: '',
    trips: sampleTrips,
    selcted:null
  };
}

@Injectable()
@StoreConfig({ name: 'trip' })
export class TripStore extends Store<TripState> {

  constructor() {
    super(createInitialState());
  }

}
