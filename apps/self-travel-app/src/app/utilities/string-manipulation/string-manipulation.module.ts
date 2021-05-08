import { CapitalizePipe } from './pipes/capitalize.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [CapitalizePipe],
  imports: [
    CommonModule
  ],
  exports: [CapitalizePipe]
})
export class StringManipulationModule { }
