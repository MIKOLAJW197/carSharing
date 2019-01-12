import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ApiService} from "../../api/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tariff-add',
  templateUrl: './tariff-add.component.html',
  styleUrls: ['./tariff-add.component.css']
})
export class TariffAddComponent implements OnInit {

  tariffForm: FormGroup;

  constructor(private apiService: ApiService,
              private router: Router) {
  }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    const tariff = {
      od_kiedy: this.tariffForm.get('odKiedy').value,
      do_kiedy: this.tariffForm.get('doKiedy').value,
      cena_kilometra: this.tariffForm.get('cenaKilometra').value,
      cena_minuty: this.tariffForm.get('cenaMinuty').value,
    };
    // console.log(user);
    this.apiService.addTariff(tariff).subscribe(resp => this.router.navigate(['/tariff']));
  }

  private initForm() {
    this.tariffForm = new FormGroup({
      odKiedy: new FormControl(),
      doKiedy: new FormControl(),
      cenaKilometra: new FormControl(),
      cenaMinuty: new FormControl()
    });
  }
}
