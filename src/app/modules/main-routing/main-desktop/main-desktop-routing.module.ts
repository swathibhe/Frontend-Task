import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainDesktopComponent } from './main-desktop.component';


const routes: Routes = [
  {
    path: '',
    component: MainDesktopComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../../../modules/home/home-desktop/home-desktop.module').then(m => m.HomeDesktopModule),
      },
      {
        path: '**', redirectTo: 'home'
      }

    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MainDesktopRoutingModule { }
