import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  carForm: FormGroup;

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
