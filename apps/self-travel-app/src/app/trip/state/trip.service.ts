import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { Travel } from '../model/trip-entity.model';

import { TripStore } from './trip.store';

@Injectable()
export class TripService {

  constructor(private tripStore: TripStore, private http: HttpClient) {
  }


  get() {
    return this.http.get<Travel[]>('https://api.com').pipe(tap(entities => {
     // this.tripStore.set(entities);
    }));
  }

  add(trip: Travel) {
   // this.tripStore.add(trip);
  }

  update(id, trip: Partial<Travel>) {
  //  this.tripStore.update(id, trip);
  }

  remove(id: ID) {
   // this.tripStore.remove(id);
  }

}
