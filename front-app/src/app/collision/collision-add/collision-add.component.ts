import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {forkJoin} from "rxjs/internal/observable/forkJoin";
import {RouteWithDataService} from "../../route-with-data.service";
import {Ride} from "../../ride/ride-list/ride-list.component";
import {Worker} from "../../worker/worker-list/worker-list.component";
import {User} from "../../user/user-list/user-list.component";
import {Car} from "../../car/car-list/car-list.component";
import {ApiService} from "../../api/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-collision-add',
  templateUrl: './collision-add.component.html',
  styleUrls: ['./collision-add.component.css']
})
export class CollisionAddComponent implements OnInit {

  collisionForm: FormGroup;
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
  }

  onSubmit() {
    let col = {
      lokalizacja: this.collisionForm.get('lokalizacja').value,
      data: this.collisionForm.get('data').value,
      przejazd_id: this.collisionForm.get('przejazd').value,
      pracownik_id: this.collisionForm.get('prac_id').value
    };
    this.apiService.addCollision(col).subscribe(resp => this.router.navigate(['/collision']));
  }

  getRideInfo(id: number) {
    let userID = this.rides.filter(przejazd => przejazd.id === id).map(user => user.uzytkownik_id)[0];
    let carID = this.rides.filter(przejazd => przejazd.id === id).map(car => car.samochod_id)[0];
    let carRej = this.cars.filter(car => car.id === carID).map(car => car.nr_rejestracyjny);
    return this.users.filter(user => user.id === userID).map(user => user.imie + ' ' + user.nazwisko) + '  Przejazd nr. ' + id + '  Samochod nr: ' + carRej;
  }

  private initForm() {
    this.collisionForm = new FormGroup({
      lokalizacja: new FormControl(),
      data: new FormControl(),
      przejazd: new FormControl(),
      prac_id: new FormControl()
    });
  }
}
