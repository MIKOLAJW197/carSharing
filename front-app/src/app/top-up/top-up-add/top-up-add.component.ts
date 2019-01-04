import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-top-up-add',
  templateUrl: './top-up-add.component.html',
  styleUrls: ['./top-up-add.component.css']
})
export class TopUpAddComponent implements OnInit {

  topupForm: FormGroup;

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
    this.topupForm = new FormGroup({
      data: new FormControl(),
      kwota: new FormControl(),
      sposobPlatnosci: new FormControl(),
      uzytkownikMail: new FormControl()
    });
  }
}
