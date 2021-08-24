import {NgModule} from "@angular/core";
import {AuthComponent} from "./components/auth.component";
import {AuthService} from "./services/auth.service";
import {MatFormFieldModule} from "@angular/material/form-field";
import {AuthRoutingModule} from "./auth-routing.module";
import {MatInputModule} from "@angular/material/input";
import {AuthGuard} from "./guards/auth.guard";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    AuthRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ]
})

export class AuthModule {}
