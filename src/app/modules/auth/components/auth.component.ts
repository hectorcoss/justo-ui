import {Component} from "@angular/core";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {User} from "../../shared/models/user.model";

@Component({
  selector: 'login',
  templateUrl: 'auth.component.html',
  styleUrls: ['auth.component.scss']
})

export class AuthComponent {
  public user: string = '';
  constructor(private authService: AuthService, private router: Router) {
  }

  login() {
    const user = {
      username: this.user,
    }

    this.authService.login(user)
      .subscribe(response => {
        if (response) {
          this.router.navigate(['/hit']);
        } else {
          console.log('User does not exists')
        }
      })
  }
}
