import { MainMobileRoutingModule } from './main-mobile-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMobileComponent } from './main-mobile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    MainMobileComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    MainMobileRoutingModule
  ],
})
export class MainMobileModule { }
