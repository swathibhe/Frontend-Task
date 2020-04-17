import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainMobileComponent } from './main-mobile.component';


const routes: Routes = [
  {
    path: '',
    component: MainMobileComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../../../modules/home/home-mobile/home-mobile.module').then(m => m.HomeMobileModule),
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
export class MainMobileRoutingModule { }
