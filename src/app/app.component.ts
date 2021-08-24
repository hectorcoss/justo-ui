import { Component } from '@angular/core';
import {AuthService} from "./modules/auth/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hitmen';
  isUserLogged: boolean = false;
  canDisplayUsers: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.currentUser.subscribe(user => {
      this.isUserLogged = !!(user);
      this.canDisplayUsers = user ? !(user.type === 3) : false;
    })
  }

  logout() {
    this.router.navigate(['/auth/login']).then(() => this.authService.logout());
  }
}
