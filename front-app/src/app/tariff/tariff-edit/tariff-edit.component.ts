import {Component, OnInit} from '@angular/core';
import {RouteWithDataService} from "../../route-with-data.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ApiService} from "../../api/api.service";
import {Router} from "@angular/router";
import {Parking} from "../../parking/parking-list/parking-list.component";
import {Tariff} from "../tariff-list/tariff-list.component";

@Component({
  selector: 'app-tariff-edit',
  templateUrl: './tariff-edit.component.html',
  styleUrls: ['./tariff-edit.component.css']
})
export class TariffEditComponent implements OnInit {

  tariffForm: FormGroup;
  tariff: Tariff;

  constructor(private apiService: ApiService,
              private routeWithData: RouteWithDataService,
              private router: Router) {
  }

  ngOnInit() {
    this.initForm();
    this.tariff = (this.routeWithData.data) as Tariff;
    this.patchForm();
  }

  onSubmit() {
    const tariff = {
      id: this.tariff.id,
      od_kiedy: this.tariffForm.get('odKiedy').value,
      do_kiedy: this.tariffForm.get('doKiedy').value,
      cena_kilometra: this.tariffForm.get('cenaKilometra').value,
      cena_minuty: this.tariffForm.get('cenaMinuty').value,
    };
    // console.log(user);
    this.apiService.updateTariff(tariff).subscribe(resp => this.router.navigate(['/tariff']));
  }

  onDeleteClick() {
    if (window.confirm('Are sure you want to delete this item ?')) {
      this.apiService.delTariff(this.tariff).subscribe(
        resp => this.router.navigate(['/tariff']));
    }
  }

  private initForm() {
    this.tariffForm = new FormGroup({
      odKiedy: new FormControl(),
      doKiedy: new FormControl(),
      cenaKilometra: new FormControl(),
      cenaMinuty: new FormControl()
    });
  }

  private patchForm() {
    this.tariffForm.get('odKiedy').patchValue(this.tariff.od_kiedy);
    this.tariffForm.get('doKiedy').patchValue(this.tariff.do_kiedy);
    this.tariffForm.get('cenaKilometra').patchValue(this.tariff.cena_kilometra);
    this.tariffForm.get('cenaMinuty').patchValue(this.tariff.cena_minuty);
  }
}
