import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LodgingRoutingModule } from './lodging-routing.module';
import { LodgingDetailComponent } from './lodging-detail/lodging-detail.component';


@NgModule({
  declarations: [
    LodgingDetailComponent
  ],
  imports: [
    CommonModule,
    LodgingRoutingModule
  ],
  exports: [
    LodgingDetailComponent
  ]
})
export class LodgingModule { }
