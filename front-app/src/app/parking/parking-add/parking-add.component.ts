import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ApiService} from "../../api/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-parking-add',
  templateUrl: './parking-add.component.html',
  styleUrls: ['./parking-add.component.css']
})
export class ParkingAddComponent implements OnInit {

  parkingForm: FormGroup;

  constructor(private apiService: ApiService,
              private router: Router) {
  }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    const parking = {
      lokalizacja: this.parkingForm.get('lokalizacja').value,
      liczba_miejsc: this.parkingForm.get('liczbaMiejsc').value,
    };
    // console.log(user);
    this.apiService.addParking(parking).subscribe(resp => this.router.navigate(['/parking']));
  }

  private initForm() {
    this.parkingForm = new FormGroup({
      lokalizacja: new FormControl(),
      liczbaMiejsc: new FormControl(),
    });
  }
}
