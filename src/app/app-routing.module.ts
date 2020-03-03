import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  { 
    path: 'select-car', 
    loadChildren: './pages/select-car/select-car.module#SelectCarPageModule' 
  },
  { path: 'maintenance', loadChildren: './pages/maintenance/maintenance.module#MaintenancePageModule' },
  { path: 'baja-club', loadChildren: './pages/baja-club/baja-club.module#BajaClubPageModule' },
  { path: 'manual', loadChildren: './pages/manual/manual.module#ManualPageModule' },
  { path: 'car', loadChildren: './pages/car/car.module#CarPageModule' },
  { path: 'cart', loadChildren: './pages/cart/cart.module#CartPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
