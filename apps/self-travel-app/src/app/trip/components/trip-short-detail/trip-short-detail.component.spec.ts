import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripShortDetailComponent } from './trip-short-detail.component';

describe('TripShortDetailComponent', () => {
  let component: TripShortDetailComponent;
  let fixture: ComponentFixture<TripShortDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripShortDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripShortDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
