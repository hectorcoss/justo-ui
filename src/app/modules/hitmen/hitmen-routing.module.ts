import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HitmenListComponent} from "./components/hitmen-list.component";
import {AuthGuard} from "../auth/guards/auth.guard";

export class HitmenRoutes {
  public static readonly HITMEN_LIST = {
    url: 'list'
  };
}

export const HitmenRoute: Routes = [
  {path: '', pathMatch: 'full', redirectTo: HitmenRoutes.HITMEN_LIST.url},
  {
    path: HitmenRoutes.HITMEN_LIST.url,
    data: {
      page: {
        title: 'Hitmen List',
      },
      // requiresAuth: true,
    },
    component: HitmenListComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(HitmenRoute)]
})

export class HitmenRoutingModule {
}
