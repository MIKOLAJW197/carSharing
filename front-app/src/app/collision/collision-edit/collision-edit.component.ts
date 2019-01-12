import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ApiService} from "../../api/api.service";
import {RouteWithDataService} from "../../route-with-data.service";
import {Router} from "@angular/router";
import {Collision} from "../collision-list/collision-list.component";
import {forkJoin} from "rxjs/internal/observable/forkJoin";
import {Ride} from "../../ride/ride-list/ride-list.component";
import {Worker} from "../../worker/worker-list/worker-list.component";
import {User} from "../../user/user-list/user-list.component";
import {Car} from "../../car/car-list/car-list.component";

@Component({
  selector: 'app-collision-edit',
  templateUrl: './collision-edit.component.html',
  styleUrls: ['./collision-edit.component.css']
})
export class CollisionEditComponent implements OnInit {

  collisionForm: FormGroup;
  collision: Collision;
  rides: Ride[];
  workers: Worker[];
  users: User[];
  cars: Car[];

  constructor(private apiService: ApiService,
              private routeWithData: RouteWithDataService,
              private router: Router) {
  }

  ngOnInit() {
    this.initForm();
    this.collision = (this.routeWithData.data) as Collision;
    this.patchForm();
    forkJoin(
      this.apiService.getAllRides(),
      this.apiService.getAllWorkers(),
      this.apiService.getAllUsers(),
      this.apiService.getAllCars(),
    )
      .subscribe(([res2, res3, res4, res5]) => {
        this.rides = res2;
        this.workers = res3;
        this.users = res4;
        this.cars = res5;
      });
    this.collisionForm.get('id').disable();
  }

  onSubmit() {
    let col = {
      id: this.collision.id,
      lokalizacja: this.collisionForm.get('lokalizacja').value,
      data: this.collisionForm.get('data').value,
      przejazd_id: this.collisionForm.get('przejazd').value,
      pracownik_id: this.collisionForm.get('prac_id').value
    };
    this.apiService.updateCollision(col).subscribe(resp => this.router.navigate(['/collision']));
  }

  onDeleteClick() {
    if (window.confirm('Are sure you want to delete this item ?')) {
      //put your delete method logic here
      this.apiService.delCollision(this.collision).subscribe(resp => this.router.navigate(['/collision']));
    }
  }

  getRideInfo(id: number) {
    let userID =  this.rides.filter(przejazd => przejazd.id === id).map(user => user.uzytkownik_id)[0];
    let carID =  this.rides.filter(przejazd => przejazd.id === id).map(car => car.samochod_id)[0];
    let carRej = this.cars.filter(car => car.id === carID).map(car => car.nr_rejestracyjny);
    return this.users.filter(user => user.id === userID).map(user => user.imie + ' '+ user.nazwisko) + '  Przejazd nr. '+ id + '  Samochod nr: '+ carRej;
  }


  private initForm() {
    this.collisionForm = new FormGroup({
      id: new FormControl(),
      lokalizacja: new FormControl(),
      data: new FormControl(),
      przejazd: new FormControl(),
      prac_id: new FormControl(),
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
