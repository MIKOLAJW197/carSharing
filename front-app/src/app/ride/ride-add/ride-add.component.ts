import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-ride-add',
  templateUrl: './ride-add.component.html',
  styleUrls: ['./ride-add.component.css']
})
export class RideAddComponent implements OnInit {

  rideForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    // const text = this.textForm.get('text').value;
    // this.orginalString=text;
    // const transformation = this.transformationList.map(el => el.key).join(',');
    // const request = AppComponent.toNewRequest(text, transformation);
    // this.apiService.getTransformedText(request).subscribe(resp => {
    //   this.transformedString=resp.transformed
    //   this.openAddFileDialog();
    // });
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
