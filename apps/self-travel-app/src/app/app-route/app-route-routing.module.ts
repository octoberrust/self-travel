import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTripComponent } from '../trip/containers/create-trip/create-trip.component';

const routes: Routes = [{
  path: 'create',
  component: CreateTripComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouteRoutingModule { }
