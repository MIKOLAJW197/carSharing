import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Ride} from "../../ride/ride-list/ride-list.component";
import {User} from "../../user/user-list/user-list.component";
import {Car} from "../../car/car-list/car-list.component";
import {forkJoin} from "rxjs/internal/observable/forkJoin";
import {RouteWithDataService} from "../../route-with-data.service";
import {ApiService} from "../../api/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-refuel-add',
  templateUrl: './refuel-add.component.html',
  styleUrls: ['./refuel-add.component.css']
})
export class RefuelAddComponent implements OnInit {

  refuelForm: FormGroup;

  rides: Ride[];
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
      this.apiService.getAllUsers(),
      this.apiService.getAllCars()
    )
      .subscribe(([res2, res3, res4]) => {
        this.rides = res2;
        this.users = res3;
        this.cars = res4;
      });
  }

  onSubmit() {
    let ref = {
      siec_stacji: this.refuelForm.get('siecStacji').value,
      ile_litrow: this.refuelForm.get('ileLitrow').value,
      kwota: this.refuelForm.get('kwota').value,
      przejazd_id: this.refuelForm.get('przejazd').value,
    };
    this.apiService.addRefuel(ref).subscribe(resp => this.router.navigate(['/refuel']));
  }

  getRideInfo(id: number) {
    let userID = this.rides.filter(przejazd => przejazd.id === id).map(user => user.uzytkownik_id)[0];
    let carID = this.rides.filter(przejazd => przejazd.id === id).map(car => car.samochod_id)[0];
    let carRej = this.cars.filter(car => car.id === carID).map(car => car.nr_rejestracyjny);
    return this.users.filter(user => user.id === userID).map(user => user.imie + ' ' + user.nazwisko) + '  Przejazd nr. ' + id + '  Samochod nr: ' + carRej;
  }

  private initForm() {
    this.refuelForm = new FormGroup({
      siecStacji: new FormControl(),
      ileLitrow: new FormControl(),
      kwota: new FormControl(),
      przejazd: new FormControl()
    });
  }
}
