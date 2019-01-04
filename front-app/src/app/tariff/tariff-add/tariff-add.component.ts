import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-tariff-add',
  templateUrl: './tariff-add.component.html',
  styleUrls: ['./tariff-add.component.css']
})
export class TariffAddComponent implements OnInit {

  tariffForm: FormGroup;

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
    this.tariffForm = new FormGroup({
      odKiedy: new FormControl(),
      doKiedy: new FormControl(),
      cenaKilometra: new FormControl(),
      cenaMinuty: new FormControl()
    });
  }
}
