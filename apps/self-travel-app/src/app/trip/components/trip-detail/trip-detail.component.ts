import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Travel } from '../../model/trip-entity.model';
import { TripQuery } from '../../state/trip.query';

@Component({
  selector: 'self-travel-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.scss']
})
export class TripDetailComponent implements OnInit {
  options: any;
  infoWindow: any;
  constructor(private qry: TripQuery) { }

  ngOnInit(): void {

  }
  get trip$() {
    return this.qry.selected$.pipe(
      map((tr: Travel) => {

        const toReturn = {
          name:tr.name,
          frCity: tr.from.city,
          frCountry: tr.from.country,
          toCity: tr.to.city,
          toCountry: tr.to.country,
          tickCarrier: tr.ticket.carrier,
          tickType: tr.ticket.type,
          tickDeparture: tr.ticket.departure,
          tickArrival: tr.ticket.arrival,
          tickLink: tr.ticket.link,
          wallet: tr.wallet.established,
          tripStart: tr.tripStart,
          tripEnd: tr.tripEnd,
          lodName: tr.lodging.name,
          lodAddress: tr.lodging.streetAddress
        }
        return toReturn;
      })
    )
  }

}
