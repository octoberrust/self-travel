import { TripService } from './state/trip.service'

import { TripStore } from './state/trip.store'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TripRoutingModule } from './trip-routing.module'

import { DataViewModule } from 'primeng/dataview'
import { TripQuery } from './state/trip.query'
import { TripListItemComponent } from './components/trip-list-item/trip-list-item.component'
import { ButtonModule } from 'primeng/button'
import { DropdownModule } from 'primeng/dropdown'
import { VirtualScrollerModule } from 'primeng/virtualscroller'
import { TripDetailComponent } from './components/trip-detail/trip-detail.component'
import { PanelModule } from 'primeng/panel'
import { TripShortDetailComponent } from './components/trip-short-detail/trip-short-detail.component'
import { StringManipulationModule } from '../utilities/string-manipulation/string-manipulation.module'
import { GMapModule } from 'primeng/gmap'
import { CreateTripComponent } from './containers/create-trip/create-trip.component'
import { ReactiveFormsModule } from '@angular/forms'
import { TripPointComponent } from './components/trip-point/trip-point.component'
import { CalendarModule } from 'primeng/calendar'
import { FormsModule } from '@angular/forms'
import { CheckboxModule } from 'primeng/checkbox'
import { TripsComponent } from './containers/trips/trips.component'
const primeModules = [
    CheckboxModule,
    CalendarModule,
    GMapModule,
    DropdownModule,
    DataViewModule,
    ButtonModule,
    VirtualScrollerModule,
    PanelModule,
]
@NgModule({
    declarations: [
        TripsComponent,
        TripListItemComponent,
        TripDetailComponent,
        TripShortDetailComponent,
        CreateTripComponent,
        TripPointComponent,
    ],
    imports: [
        CommonModule,
        TripRoutingModule,
        StringManipulationModule,
        ReactiveFormsModule,
        FormsModule,
        [...primeModules],
    ],
    exports: [TripsComponent, CreateTripComponent],
    providers: [TripStore, TripService, TripQuery],
})
export class TripModule {}
