import {NgModule} from "@angular/core";
import {HitmenListComponent} from "./components/hitmen-list.component";
import {CommonModule} from "@angular/common";
import {HitmenRoutingModule} from "./hitmen-routing.module";
import {HitmenService} from "./services/hitmen.service";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {AuthService} from "../auth/services/auth.service";
import {AuthGuard} from "../auth/guards/auth.guard";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    HitmenListComponent
  ],
  imports: [
    CommonModule,
    HitmenRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
  ],
  providers: [
    HitmenService,
    AuthService,
    AuthGuard
  ]
})

export class HitmenModule {}
