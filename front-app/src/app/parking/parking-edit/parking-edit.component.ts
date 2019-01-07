import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Parking} from "../parking-list/parking-list.component";
import {ApiService} from "../../api/api.service";
import {Router} from "@angular/router";
import {RouteWithDataService} from "../../route-with-data.service";

@Component({
  selector: 'app-parking-edit',
  templateUrl: './parking-edit.component.html',
  styleUrls: ['./parking-edit.component.css']
})
export class ParkingEditComponent implements OnInit {

  parkingForm: FormGroup;
  parking: Parking;

  constructor(private apiService: ApiService,
              private routeWithData: RouteWithDataService,
              private router: Router) {
  }

  ngOnInit() {
    this.initForm();
    this.parking = (this.routeWithData.data) as Parking;
    this.patchForm();
  }

  onSubmit() {
    // const user = {
    //   mail: this.parkingForm.get('mail').value,
    //   haslo: this.parkingForm.get('haslo').value,
    //   imie: this.parkingForm.get('imie').value,
    //   nazwisko: this.parkingForm.get('nazwisko').value,
    //   pesel: this.parkingForm.get('pesel').value,
    //   stan_skarbonki: this.parkingForm.get('stanSkarbonki').value,
    // };
    // this.apiService.updateUser(user).subscribe(resp => this.router.navigate(['/users']));
  }

  onDeleteClick() {
    if (window.confirm('Are sure you want to delete this item ?')) {
      //put your delete method logic here
      this.apiService.delParking(this.parking).subscribe(resp => this.router.navigate(['/parking']));
    }
  }

  private initForm() {
    this.parkingForm = new FormGroup({
      lokalizacja: new FormControl(),
      liczbaMiejsc: new FormControl(),
    });
  }

  private patchForm() {
    this.parkingForm.get('lokalizacja').patchValue(this.parking.lokalizacja);
    this.parkingForm.get('liczbaMiejsc').patchValue(this.parking.liczbaMiejsc);
  }
}
