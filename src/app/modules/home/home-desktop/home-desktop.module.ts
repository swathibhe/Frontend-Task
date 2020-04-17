import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeDesktopComponent } from './home-desktop.component';
import { Routes, RouterModule } from '@angular/router';

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
    RouterModule.forChild(routes)
  ]
})
export class HomeDesktopModule { }
