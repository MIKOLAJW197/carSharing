import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-refuel-add',
  templateUrl: './refuel-add.component.html',
  styleUrls: ['./refuel-add.component.css']
})
export class RefuelAddComponent implements OnInit {

  refuelForm: FormGroup;

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
    this.refuelForm = new FormGroup({
      id: new FormControl(),
      siecStacji: new FormControl(),
      ileLitrow: new FormControl(),
      kwota: new FormControl(),
      przejazdDataRozpoczecia: new FormControl(),
      przejazdUzytkownikMail: new FormControl(),
      przejazdNrRejestracyjny: new FormControl()
    });
  }
}
