import { MainDesktopRoutingModule } from './main-desktop-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDesktopComponent } from './main-desktop.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [MainDesktopComponent],
  imports: [
    CommonModule,
    NgbModule,
    MainDesktopRoutingModule,
    SharedModule,
  ]
})
export class MainDesktopModule { }
