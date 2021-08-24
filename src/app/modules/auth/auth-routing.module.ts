import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AuthComponent} from "./components/auth.component";

export class LoginRoutes {
  public static readonly LOGIN = {
    url: 'auth/login'
  };
  public static readonly REGISTER = {
    url: 'auth/register'
  };
}

export const LoginRoute: Routes = [
  {
    path: LoginRoutes.LOGIN.url,
    data: {
      page: {
        title: 'Login'
      }
    },
    component: AuthComponent
  },
  {
    path: LoginRoutes.REGISTER.url,
    data: {
      page: {
        title: 'Register user'
      }
    },
    component: AuthComponent
  },
  {
    path: '**',
    redirectTo: LoginRoutes.LOGIN.url
  }
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(LoginRoute)]
})

export class AuthRoutingModule {}
