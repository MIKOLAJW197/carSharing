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
    const parking = {
      id: this.parking.id,
      lokalizacja: this.parkingForm.get('lokalizacja').value,
      liczba_miejsc: this.parkingForm.get('liczbaMiejsc').value,
    };
    // console.log(user);
    this.apiService.updateParking(parking).subscribe(resp => this.router.navigate(['/parking']));
  }

  onDeleteClick() {
    if (window.confirm('Are sure you want to delete this item ?')) {
      this.apiService.delParking(this.parking).subscribe(
        resp => this.router.navigate(['/parking']));
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
    this.parkingForm.get('liczbaMiejsc').patchValue(this.parking.liczba_miejsc);
  }
}
