import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'self-travel-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.scss']
})
export class CreateTripComponent implements OnInit {

  pointForm
  get formPoints() {
    return this.pointForm.get('points') as FormArray;
  }
  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.pointForm = this.fb.group({
      points: this.fb.array([])
    })
  }

  public addPoint(): void {
    this.formPoints.push(this.fb.control(''));
  }
}
