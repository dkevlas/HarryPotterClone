import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/home/home.module').then(module => module.HomeModule)
  },
  {
    path: 'inicio',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: ':house',
    loadChildren: () => import('./components/house/house.module').then(module => module.HouseModule)
  },
  {
    path: '**',
    loadChildren: () => import('./error/error.module').then(module => module.ErrorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
