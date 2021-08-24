import {Component, Inject, OnInit} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {HitService} from "../services/hit.service";
import {FormBuilder} from "@angular/forms";
import {Hit} from "../models/hit.model";
import {HitmenService} from "../../hitmen/services/hitmen.service";
import {Hitmen} from "../../hitmen/models/hitmen.model";
import {AuthService} from "../../auth/services/auth.service";

@Component({
  selector: 'hit-add',
  templateUrl: 'hit-add.component.html',
  styleUrls: ['hit-add.component.scss']
})

export class HitAddComponent implements OnInit {
  public hitmen: Hitmen[] = [];

  hitForm = this.formBuilder.group({
    hitman: '',
    target: '',
    description: ''
  });
  constructor(
    private hitService: HitService,
    private hitmenService: HitmenService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    public dialogRef: MatDialogRef<HitAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
    this.hitmenService.getHitmenList()
      .subscribe(response => this.hitmen = response);
  }

  save() {
    const newHit = new Hit();
    newHit.hitmen_id = this.hitForm.value.hitman;
    newHit.target = this.hitForm.value.target;
    newHit.description = this.hitForm.value.description;
    newHit.creator_id = this.authService.currentUserValue?.id;
    this.hitService.saveHit(newHit).subscribe(response => this.dialogRef.close());
  }
}
