import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../api/api.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {RouteWithDataService} from "../../route-with-data.service";
import {Car} from "../car-list/car-list.component";
import {Base} from "../../base/base-list/base-list.component";
import {Parking} from "../../parking/parking-list/parking-list.component";

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {

  carForm: FormGroup;
  car: Car;
  bases: Base[];
  parkings: Parking[];

  constructor(private api: ApiService,
              private router: Router,
              private routeWithData: RouteWithDataService) {
  }

  ngOnInit() {
    this.initForm();
    this.api.getAllBases().subscribe(resp=> this.bases = resp);
    this.api.getAllParkings().subscribe(resp=> this.parkings = resp);
    this.car = (this.routeWithData.data) as Car;
    this.patchForm();
  }


  onDeleteClick() {
    if (window.confirm('Are sure you want to delete this item ?')) {
      this.api.delCar(this.car).subscribe(
        resp => this.router.navigate(['/cars']));
    }
  }

  onSubmit() {
    const car = {
      id: this.car.id,
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
    this.api.updateCar(car).subscribe(resp => this.router.navigate(['/cars']));
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

  private patchForm() {
    this.carForm.get('nrRejestracyjny').patchValue(this.car.nr_rejestracyjny);
    this.carForm.get('dostepny').patchValue(this.car.dostepny);
    this.carForm.get('model').patchValue(this.car.model);
    this.carForm.get('marka').patchValue(this.car.marka);
    this.carForm.get('przebieg').patchValue(this.car.przebieg);
    this.carForm.get('lokalizacjaPozaP').patchValue(this.car.lokalizacja_poza_p);
    this.carForm.get('bazaLokalizacja').patchValue(this.car.baza_id);
    this.carForm.get('parkingLokalizacja').patchValue(this.car.parking_id);
  }
}
