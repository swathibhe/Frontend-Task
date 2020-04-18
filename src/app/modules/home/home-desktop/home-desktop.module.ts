import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeDesktopComponent } from './home-desktop.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: HomeDesktopComponent
  }
];

@NgModule({
  declarations: [
    HomeDesktopComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule
  ]
})
export class HomeDesktopModule { }
