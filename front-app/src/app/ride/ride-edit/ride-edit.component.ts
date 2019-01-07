import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ApiService} from "../../api/api.service";
import {Router} from "@angular/router";
import {RouteWithDataService} from "../../route-with-data.service";
import {Ride} from "../ride-list/ride-list.component";

@Component({
  selector: 'app-ride-edit',
  templateUrl: './ride-edit.component.html',
  styleUrls: ['./ride-edit.component.css']
})
export class RideEditComponent implements OnInit {

  rideForm: FormGroup;
  ride: Ride;

  constructor(private apiService: ApiService,
              private routeWithData: RouteWithDataService,
              private router: Router) {
  }


  ngOnInit() {
    this.initForm();
    this.ride = (this.routeWithData.data) as Ride;
    this.patchForm();
  }

  onSubmit() {
    // const ride = {
    //   mail: this.rideForm.get('mail').value,
    //   haslo: this.rideForm.get('haslo').value,
    //   imie: this.rideForm.get('imie').value,
    //   nazwisko: this.rideForm.get('nazwisko').value,
    //   pesel: this.rideForm.get('pesel').value,
    //   stan_skarbonki: this.rideForm.get('stanSkarbonki').value,
    // };
    // this.apiService.updateride(ride).subscribe(resp => this.router.navigate(['/rides']));
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
    this.rideForm.get('dataRozpoczecia').patchValue(this.ride.dataRozpoczecia);
    this.rideForm.get('dataZakonczenia').patchValue(this.ride.dataZakonczenia);
    this.rideForm.get('dystans').patchValue(this.ride.dystans);
    this.rideForm.get('lokalizacjaPoczatkowa').patchValue(this.ride.lokalizacjaPoczatkowa);
    this.rideForm.get('lokalizacjaKoncowa').patchValue(this.ride.lokalizacjaKoncowa);
    this.rideForm.get('uzytkownikMail').patchValue(this.ride.uzytkownikMail);
    this.rideForm.get('samochodNrRejestracyjny').patchValue(this.ride.samochodNrRejestracyjny);
  }
}

