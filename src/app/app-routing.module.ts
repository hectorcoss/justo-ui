import { NgModule } from '@angular/core';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

export const AppRoute: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  // {path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)},
  {path: 'user', loadChildren: () => import('./modules/hitmen/hitmen.module').then(m => m.HitmenModule)},
  {path: 'hit', loadChildren: () => import('./modules/hit/hit.module').then(m => m.HitModule)},
  {path: '**', redirectTo: 'login' },
]

@NgModule({
  exports: [RouterModule],
  providers: [{provide: LocationStrategy, useClass: PathLocationStrategy}],
  imports: [RouterModule.forRoot(AppRoute, {enableTracing: false, onSameUrlNavigation: 'reload'})]
})

export class AppRoutingModule { }
