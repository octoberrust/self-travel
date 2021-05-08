import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TourRoutingModule } from './tour-routing.module';
import { TourDetailComponent } from './tour-detail/tour-detail.component';


@NgModule({
  declarations: [
    TourDetailComponent
  ],
  imports: [
    CommonModule,
    TourRoutingModule
  ],
  exports: [
    TourDetailComponent
  ]
})
export class TourModule { }
