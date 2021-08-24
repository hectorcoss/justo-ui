import {Component, OnInit} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {HitmenService} from "../services/hitmen.service";
import {Hitmen} from "../models/hitmen.model";
import {User} from "../../shared/models/user.model";
import {AuthService} from "../../auth/services/auth.service";

@Component({
  selector: 'hitmen-list',
  templateUrl: 'hitmen-list.component.html',
  styleUrls: ['hitmen-list.component.scss']
})

export class HitmenListComponent implements OnInit {
  public hitmenList: Hitmen[] = [];
  public user: User | null | undefined;

  constructor(
    private titleService: Title,
    private hitmenService: HitmenService,
    private authService: AuthService,) {
    this.authService.currentUser.subscribe(user => {
      this.user = user;
    })
  }

  ngOnInit() {
    this.titleService.setTitle('Hitmen List');
    this.getUsers();
  }

  deactivate(userId: any) {
    this.hitmenService.deactivate(userId)
      .subscribe((response: any) => {
        this.getUsers()
      })
  }

  getUsers(): void {
    this.hitmenService.getHitmen(this.user)
      .subscribe((response: any) => {
        this.hitmenList = response;
      });
  }
}
