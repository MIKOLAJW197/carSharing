import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-work-add',
  templateUrl: './work-add.component.html',
  styleUrls: ['./work-add.component.css']
})
export class WorkAddComponent implements OnInit {


  workForm: FormGroup;

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
    this.workForm = new FormGroup({
      id: new FormControl(),
      coRobione: new FormControl(),
      odKiedy: new FormControl(),
      doKiedy: new FormControl(),
      bazaLokalizacja: new FormControl(),
      samochodNrRejestracyjny: new FormControl()
    });
  }
}
