import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeMobileComponent } from './home-mobile.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


const routes: Routes = [
  {
    path: '',
    component: HomeMobileComponent
  }
];

@NgModule({
  declarations: [
    HomeMobileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    SharedModule
  ]
})
export class HomeMobileModule { }
