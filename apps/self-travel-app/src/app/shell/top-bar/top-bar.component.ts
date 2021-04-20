import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'self-travel-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  items: MenuItem[];
  activeItem: MenuItem;
  constructor() { }

  ngOnInit(): void {
    this.items = [
      { label: 'podroz', icon: 'pi pi-fw pi-home' },
      { label: 'wycieczka', icon: 'pi pi-fw pi-calendar' },
      { label: 'budzet', icon: 'pi pi-fw pi-pencil' },
      { label: 'bilety', icon: 'pi pi-fw pi-file' },
      { label: 'noclegi', icon: 'pi pi-fw pi-file' },

    ];
    this.activeItem = this.items[0];
  }
}


