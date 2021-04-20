import { TripService } from './state/trip.service';

import { TripStore } from './state/trip.store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TripRoutingModule } from './trip-routing.module';
import { TripsComponent } from './trips/trips.component'
import { DataViewModule } from 'primeng/dataview';
import { TripQuery } from './state/trip.query';
import { TripListItemComponent } from './components/trip-list-item/trip-list-item.component';
import { ButtonModule } from 'primeng/button';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { TripDetailComponent } from './components/trip-detail/trip-detail.component';
import { PanelModule } from 'primeng/panel';

@NgModule({
  declarations: [
    TripsComponent,
    TripListItemComponent,
    TripDetailComponent
  ],
  imports: [
    CommonModule,
    TripRoutingModule,
    DataViewModule,
    ButtonModule,
    VirtualScrollerModule,
    PanelModule
  ],
  exports: [
    TripsComponent
  ],
  providers: [
    TripStore,
    TripService,
    TripQuery
  ]
})
export class TripModule { }
