import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRouteRoutingModule } from './app-route-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppRouteRoutingModule
  ],
  exports: [AppRouteRoutingModule]
})
export class AppRouteModule { }
