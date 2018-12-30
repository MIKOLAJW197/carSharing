import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-collision-add',
  templateUrl: './collision-add.component.html',
  styleUrls: ['./collision-add.component.css']
})
export class CollisionAddComponent implements OnInit {

  collisionForm: FormGroup;

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
    this.collisionForm = new FormGroup({
      id: new FormControl(),
      lokalizacja: new FormControl(),
      data: new FormControl(),
      przejazdDataRozpoczecia: new FormControl(),
      przejazdUzytkownikMail: new FormControl(),
      przejazdNrRejestracyjny: new FormControl(),
      pracownikPesel: new FormControl(),
      pracownikLokalizacja: new FormControl(),
    });
  }
}
