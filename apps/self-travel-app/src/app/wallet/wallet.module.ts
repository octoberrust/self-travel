import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WalletRoutingModule } from './wallet-routing.module';
import { WalletDetailComponent } from './wallet-detail/wallet-detail.component';


@NgModule({
  declarations: [
    WalletDetailComponent
  ],
  imports: [
    CommonModule,
    WalletRoutingModule
  ],
  exports: [
    WalletDetailComponent
  ]
})
export class WalletModule { }
