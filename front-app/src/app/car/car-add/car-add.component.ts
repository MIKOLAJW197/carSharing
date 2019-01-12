import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Base} from "../../base/base-list/base-list.component";
import {Parking} from "../../parking/parking-list/parking-list.component";
import {RouteWithDataService} from "../../route-with-data.service";
import {ApiService} from "../../api/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  carForm: FormGroup;
  bases: Base[];
  parkings: Parking[];

  constructor(private api: ApiService,
              private router: Router,
              private routeWithData: RouteWithDataService) {
  }

  ngOnInit() {
    this.initForm();
    this.api.getAllBases().subscribe(resp => this.bases = resp);
    this.api.getAllParkings().subscribe(resp => this.parkings = resp);
  }

  onSubmit() {
    const car = {
      nr_rejestracyjny: this.carForm.get('nrRejestracyjny').value,
      dostepny: this.carForm.get('dostepny').value,
      model: this.carForm.get('model').value,
      marka: this.carForm.get('marka').value,
      przebieg: this.carForm.get('przebieg').value,
      lokalizacja_poza_p: this.carForm.get('lokalizacjaPozaP').value,
      baza_id: this.carForm.get('bazaLokalizacja').value,
      parking_id: this.carForm.get('parkingLokalizacja').value,
    };
    // console.log(user);
    this.api.addCar(car).subscribe(resp => this.router.navigate(['/cars']));
  }

  private initForm() {
    this.carForm = new FormGroup({
      nrRejestracyjny: new FormControl(),
      dostepny: new FormControl(),
      model: new FormControl(),
      marka: new FormControl(),
      przebieg: new FormControl(),
      lokalizacjaPozaP: new FormControl(),
      bazaLokalizacja: new FormControl(),
      parkingLokalizacja: new FormControl(),
    });
  }
}
