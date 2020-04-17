import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, PreloadAllModules } from '@angular/router';
import { ApplicationStateService } from './shared/services/application-state.service';


const desktop_routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main',
    loadChildren: () => import('./modules/main-routing/main-desktop/main-desktop.module').then(m => m.MainDesktopModule),
  },
];

const mobile_routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {
    path: 'main',
    loadChildren: () => import('./modules/main-routing/main-mobile/main-mobile.module').then(m => m.MainMobileModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(desktop_routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  public constructor(private router: Router,
    private applicationStateService: ApplicationStateService) {

    if (applicationStateService.getIsMobileResolution()) {
      router.resetConfig(mobile_routes);
    }
  }

}
