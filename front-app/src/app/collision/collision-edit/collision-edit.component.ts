import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ApiService} from "../../api/api.service";
import {RouteWithDataService} from "../../route-with-data.service";
import {Router} from "@angular/router";
import {Collision} from "../collision-list/collision-list.component";

@Component({
  selector: 'app-collision-edit',
  templateUrl: './collision-edit.component.html',
  styleUrls: ['./collision-edit.component.css']
})
export class CollisionEditComponent implements OnInit {

  collisionForm: FormGroup;
  collision: Collision;

  constructor(private apiService: ApiService,
              private routeWithData: RouteWithDataService,
              private router: Router) {
  }

  ngOnInit() {
    this.initForm();
    this.collision = (this.routeWithData.data) as Collision;
    this.patchForm();
  }

  onSubmit() {
  }

  onDeleteClick() {
    if (window.confirm('Are sure you want to delete this item ?')) {
      //put your delete method logic here
      this.apiService.delCollision(this.collision).subscribe(resp => this.router.navigate(['/collisions']));
    }
  }


  private initForm() {
    this.collisionForm = new FormGroup({
      id: new FormControl(),
      lokalizacja: new FormControl(),
      data: new FormControl(),
      przejazd: new FormControl(),
      pracownikPesel: new FormControl(),
    });
  }

  private patchForm() {
    this.collisionForm.get('id').patchValue(this.collision.id);
    this.collisionForm.get('lokalizacja').patchValue(this.collision.lokalizacja);
    this.collisionForm.get('data').patchValue(this.collision.data);
    this.collisionForm.get('przejazd').patchValue(this.collision.przejazd_id);
    this.collisionForm.get('prac_id').patchValue(this.collision.pracownik_id);
  }
}
