import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TabMenuModule} from 'primeng/tabmenu';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';





@NgModule({
  declarations: [

    SideBarComponent,
     TopBarComponent
  ],
  imports: [
    CommonModule,
    TabMenuModule
  ],
  exports:[
    SideBarComponent,
    TopBarComponent
  ]
})
export class ShellModule { }
