import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketsRoutingModule } from './tickets-routing.module';
import { TicketsDetailComponent } from './tickets-detail/tickets-detail.component';


@NgModule({
  declarations: [
    TicketsDetailComponent
  ],
  imports: [
    CommonModule,
    TicketsRoutingModule
  ],
  exports: [
    TicketsDetailComponent
  ]
})
export class TicketsModule { }
