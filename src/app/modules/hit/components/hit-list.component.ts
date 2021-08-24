import {Component, OnInit} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {HitService} from "../services/hit.service";
import {Hit} from "../models/hit.model";
import {MatDialog} from "@angular/material/dialog";
import {HitAddComponent} from "./hit-add.component";
import {AuthService} from "../../auth/services/auth.service";
import {User} from "../../shared/models/user.model";

@Component({
  selector: 'hit-list',
  templateUrl: 'hit-list.component.html',
  styleUrls: ['hit-list.component.scss']
})

export class HitListComponent implements OnInit {
  public hitList: Hit[] = [];
  public user: User | null | undefined;
  public userCanCreateHit: boolean = false;

  constructor(
    private titleService: Title,
    private hitService: HitService,
    private authService: AuthService,
    public dialog: MatDialog) {
      this.authService.currentUser.subscribe(user => {
        this.user = user;
        this.userCanCreateHit = this.user?.type !== 3;
      })
  }

  ngOnInit() {
    this.titleService.setTitle('Hit List');
    this.getHist();
  }

  openHitModal() {
    const dialogRef = this.dialog.open(HitAddComponent, {
      height: '400px',
      width: '450px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getHist();
    });
  }

  getHist(): void {
    this.hitService.getHits(this.user)
      .subscribe((response: any) => {
        this.hitList = response;
      });
  }

  updateJobStatus(hitId: number | undefined, statusId: number) {
    this.hitService.updateJobStatus(hitId, statusId)
      .subscribe(response => this.getHist());
  }
}
