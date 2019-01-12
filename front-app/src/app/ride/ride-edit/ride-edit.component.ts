import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ApiService} from "../../api/api.service";
import {Router} from "@angular/router";
import {RouteWithDataService} from "../../route-with-data.service";
import {Ride} from "../ride-list/ride-list.component";
import {forkJoin} from "rxjs/internal/observable/forkJoin";
import {User} from "../../user/user-list/user-list.component";
import {Tariff} from "../../tariff/tariff-list/tariff-list.component";
import {Car} from "../../car/car-list/car-list.component";

@Component({
  selector: 'app-ride-edit',
  templateUrl: './ride-edit.component.html',
  styleUrls: ['./ride-edit.component.css']
})
export class RideEditComponent implements OnInit {

  rideForm: FormGroup;
  ride: Ride;
  users: User[];
  tariffs: Tariff[];
  cars: Car[];

  constructor(private apiService: ApiService,
              private routeWithData: RouteWithDataService,
              private router: Router) {
  }


  ngOnInit() {
    this.initForm();
    this.ride = (this.routeWithData.data) as Ride;
    this.patchForm();
    forkJoin(
      this.apiService.getAllUsers(),
      this.apiService.getAllTariffs(),
      this.apiService.getAllCars()
    )
      .subscribe(([res1, res2, res3]) => {
        this.users = res1;
        this.tariffs = res2;
        this.cars = res3;
      });
  }

  onSubmit() {
    const ride = {
      id: this.ride.id,
      data_rozpoczecia: this.rideForm.get('dataRozpoczecia').value,
      data_zakonczenia: this.rideForm.get('dataZakonczenia').value,
      dytans: this.rideForm.get('dystans').value,
      lokalizacja_poczatkowa: this.rideForm.get('lokalizacjaPoczatkowa').value,
      lokalizacja_koncowa: this.rideForm.get('lokalizacjaKoncowa').value,
      uzytkownik_id: this.rideForm.get('uzytkownikMail').value,
      cennik_id: this.rideForm.get('cennikOdKiedy').value,
      samochod_id: this.rideForm.get('samochodNrRejestracyjny').value
    };
    this.apiService.updateRide(ride).subscribe(resp => this.router.navigate(['/ride']));
  }

  onDeleteClick() {
    if (window.confirm('Are sure you want to delete this item ?')) {
      //put your delete method logic here
      this.apiService.delRide(this.ride).subscribe(resp => this.router.navigate(['/ride']));
    }
  }

  private initForm() {
    this.rideForm = new FormGroup({
      dataRozpoczecia: new FormControl(),
      dataZakonczenia: new FormControl(),
      dystans: new FormControl(),
      lokalizacjaPoczatkowa: new FormControl(),
      lokalizacjaKoncowa: new FormControl(),
      uzytkownikMail: new FormControl(),
      cennikOdKiedy: new FormControl(),
      samochodNrRejestracyjny: new FormControl()
    });
  }

  private patchForm() {
    this.rideForm.get('dataRozpoczecia').patchValue(this.ride.data_rozpoczecia);
    this.rideForm.get('dataZakonczenia').patchValue(this.ride.data_rozpoczecia);
    this.rideForm.get('dystans').patchValue(this.ride.dytans);
    this.rideForm.get('lokalizacjaPoczatkowa').patchValue(this.ride.lokalizacja_poczatkowa);
    this.rideForm.get('lokalizacjaKoncowa').patchValue(this.ride.lokalizacja_koncowa);
    this.rideForm.get('uzytkownikMail').patchValue(this.ride.uzytkownik_id);
    this.rideForm.get('cennikOdKiedy').patchValue(this.ride.cennik_id);
    this.rideForm.get('samochodNrRejestracyjny').patchValue(this.ride.samochod_id);
  }
}

