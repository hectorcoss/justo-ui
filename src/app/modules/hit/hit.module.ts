import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HitListComponent} from "./components/hit-list.component";
import {HitRoutingModule} from "./hit-routing.module";
import {HitService} from "./services/hit.service";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatIconModule} from "@angular/material/icon";
import {HitAddComponent} from "./components/hit-add.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {HitmenService} from "../hitmen/services/hitmen.service";
import {AuthService} from "../auth/services/auth.service";
import {AuthGuard} from "../auth/guards/auth.guard";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    HitListComponent,
    HitAddComponent
  ],
  imports: [
    CommonModule,
    HitRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  providers: [
    HitService,
    HitmenService,
    AuthService,
    AuthGuard
  ]
})

export class HitModule {}
