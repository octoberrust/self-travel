import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripPointComponent } from './trip-point.component';

describe('TripPointComponent', () => {
  let component: TripPointComponent;
  let fixture: ComponentFixture<TripPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripPointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
