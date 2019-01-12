import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {RouteWithDataService} from "../../route-with-data.service";
import {ApiService} from "../../api/api.service";
import {Router} from "@angular/router";
import {Tariff} from "../../tariff/tariff-list/tariff-list.component";
import {forkJoin} from "rxjs/internal/observable/forkJoin";
import {User} from "../../user/user-list/user-list.component";
import {Car} from "../../car/car-list/car-list.component";

@Component({
  selector: 'app-ride-add',
  templateUrl: './ride-add.component.html',
  styleUrls: ['./ride-add.component.css']
})
export class RideAddComponent implements OnInit {

  rideForm: FormGroup;
  users: User[];
  tariffs: Tariff[];
  cars: Car[];

  constructor(private apiService: ApiService,
              private routeWithData: RouteWithDataService,
              private router: Router) {
  }


  ngOnInit() {
    this.initForm();
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
      data_rozpoczecia: this.rideForm.get('dataRozpoczecia').value,
      data_zakonczenia: this.rideForm.get('dataZakonczenia').value,
      dytans: this.rideForm.get('dystans').value,
      lokalizacja_poczatkowa: this.rideForm.get('lokalizacjaPoczatkowa').value,
      lokalizacja_koncowa: this.rideForm.get('lokalizacjaKoncowa').value,
      uzytkownik_id: this.rideForm.get('uzytkownikMail').value,
      cennik_id: this.rideForm.get('cennikOdKiedy').value,
      samochod_id: this.rideForm.get('samochodNrRejestracyjny').value
    };
    this.apiService.addRide(ride).subscribe(resp => this.router.navigate(['/ride']));
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
}
