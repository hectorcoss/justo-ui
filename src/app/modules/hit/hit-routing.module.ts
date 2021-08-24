import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HitListComponent} from "./components/hit-list.component";
import {AuthGuard} from "../auth/guards/auth.guard";

export class HitRoutes {
  public static readonly HIT_LIST = {
    url: 'list'
  };
}

export const HitRoute: Routes = [
  {path: '', pathMatch: 'full', redirectTo: HitRoutes.HIT_LIST.url},
  {
    path: HitRoutes.HIT_LIST.url,
    data: {
      page: {
        title: 'Hit List',
      },
    },
    component: HitListComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(HitRoute)]
})

export class HitRoutingModule {
}
