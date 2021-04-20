import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Travel } from '../../model/trip-entity.model';
import { TripStore } from '../../state/trip.store';

@Component({
  selector: 'self-travel-trip-list-item',
  templateUrl: './trip-list-item.component.html',
  styleUrls: ['./trip-list-item.component.scss']
})
export class TripListItemComponent implements OnInit {
  @Input() public travel: Travel;

  @HostListener('click')public  onClick() {
    this.store.update({ selcted: this.travel });
  }


  constructor(private store: TripStore) { }

  ngOnInit(): void {
  }

}
