import { MainMobileRoutingModule } from './main-mobile-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMobileComponent } from './main-mobile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    MainMobileComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    MainMobileRoutingModule
  ],
})
export class MainMobileModule { }
