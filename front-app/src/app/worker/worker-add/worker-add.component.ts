import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-worker-add',
  templateUrl: './worker-add.component.html',
  styleUrls: ['./worker-add.component.css']
})
export class WorkerAddComponent implements OnInit {


  workerForm: FormGroup;

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
    this.workerForm = new FormGroup({
      pesel: new FormControl(),
      imie: new FormControl(),
      nazwisko: new FormControl(),
      bazaLokalizacja: new FormControl()
    });
  }
}
