
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouteModule } from './app-route/app-route.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ShellModule } from './shell/shell.module';
import { TripModule } from './trip/trip.module';
import { WalletModule } from './wallet/wallet.module';
import { TourModule } from './tour/tour.module';
import { LodgingModule } from './lodging/lodging.module';
import { TicketsModule } from './tickets/tickets.module';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { StringManipulationModule } from './utilities/string-manipulation/string-manipulation.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRouteRoutingModule } from './app-route/app-route-routing.module';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ShellModule,
    BrowserAnimationsModule,
    AppRouteModule,
    TripModule,
    WalletModule,
    TourModule,
    LodgingModule,
    TicketsModule,
    //environment.production ? [] : AkitaNgDevtools.forRoot(),
     AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule,
    StringManipulationModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [

  ],
})
export class AppModule { }
