import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ApiService} from "../../api/api.service";
import {Router} from "@angular/router";
import {RouteWithDataService} from "../../route-with-data.service";
import {Refuel} from "../refuel-list/refuel-list.component";
import {Ride} from "../../ride/ride-list/ride-list.component";
import {User} from "../../user/user-list/user-list.component";
import {Car} from "../../car/car-list/car-list.component";
import {forkJoin} from "rxjs/internal/observable/forkJoin";

@Component({
  selector: 'app-refuel-edit',
  templateUrl: './refuel-edit.component.html',
  styleUrls: ['./refuel-edit.component.css']
})
export class RefuelEditComponent implements OnInit {

  refuelForm: FormGroup;
  refuel: Refuel;

  rides: Ride[];
  users: User[];
  cars: Car[];

  constructor(private apiService: ApiService,
              private routeWithData: RouteWithDataService,
              private router: Router) {
  }

  ngOnInit() {
    this.initForm();
    this.refuel = (this.routeWithData.data) as Refuel;
    this.patchForm();
    this.refuelForm.get('id').disable();
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
      id: this.refuel.id,
      siec_stacji: this.refuelForm.get('siecStacji').value,
      ile_litrow: this.refuelForm.get('ileLitrow').value,
      kwota: this.refuelForm.get('kwota').value,
      przejazd_id: this.refuelForm.get('przejazd').value,
    };
    this.apiService.updateRef(ref).subscribe(resp => this.router.navigate(['/refuel']));
  }

  onDeleteClick() {
    if (window.confirm('Are sure you want to delete this item ?')) {
      //put your delete method logic here
      this.apiService.delRefuel(this.refuel).subscribe(resp => this.router.navigate(['/refuel']));
    }
  }

  getRideInfo(id: number) {
    let userID = this.rides.filter(przejazd => przejazd.id === id).map(user => user.uzytkownik_id)[0];
    let carID = this.rides.filter(przejazd => przejazd.id === id).map(car => car.samochod_id)[0];
    let carRej = this.cars.filter(car => car.id === carID).map(car => car.nr_rejestracyjny);
    return this.users.filter(user => user.id === userID).map(user => user.imie + ' ' + user.nazwisko) + '  Przejazd nr. ' + id + '  Samochod nr: ' + carRej;
  }

  private initForm() {
    this.refuelForm = new FormGroup({
      id: new FormControl(),
      siecStacji: new FormControl(),
      ileLitrow: new FormControl(),
      kwota: new FormControl(),
      przejazd: new FormControl()
    });
  }

  private patchForm() {
    this.refuelForm.get('id').patchValue(this.refuel.id);
    this.refuelForm.get('siecStacji').patchValue(this.refuel.siec_stacji);
    this.refuelForm.get('ileLitrow').patchValue(this.refuel.ile_litrow);
    this.refuelForm.get('kwota').patchValue(this.refuel.kwota);
    this.refuelForm.get('przejazd').patchValue(this.refuel.przejazd_id);
  }
}
