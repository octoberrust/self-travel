import { Component, Input, OnInit } from '@angular/core';
import { Ticket } from '../../trip/model/ticket.entity.model';

@Component({
  selector: 'self-travel-tickets-detail',
  templateUrl: './tickets-detail.component.html',
  styleUrls: ['./tickets-detail.component.scss']
})
export class TicketsDetailComponent implements OnInit {
  @Input() ticket: Ticket;
  constructor() { }

  ngOnInit(): void {
  }

}
