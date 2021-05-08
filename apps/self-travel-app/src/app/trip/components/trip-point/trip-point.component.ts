import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'self-travel-trip-point',
    templateUrl: './trip-point.component.html',
    styleUrls: ['./trip-point.component.scss'],
})
export class TripPointComponent implements OnInit {
    arrival;
    departure;
    isEndPoint;
    isStartPoint;
    countries: any[];
    selectedCountry: string;
    constructor() {}

    ngOnInit(): void {
        this.countries = [
            { name: 'Australia', code: 'AU' },
            { name: 'Brazil', code: 'BR' },
            { name: 'China', code: 'CN' },
            { name: 'Egypt', code: 'EG' },
            { name: 'France', code: 'FR' },
            { name: 'Germany', code: 'DE' },
            { name: 'India', code: 'IN' },
            { name: 'Japan', code: 'JP' },
            { name: 'Spain', code: 'ES' },
            { name: 'United States', code: 'US' },
        ];
    }
}
