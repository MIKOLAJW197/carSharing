import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-base-add',
  templateUrl: './base-add.component.html',
  styleUrls: ['./base-add.component.css']
})
export class BaseAddComponent implements OnInit {

  baseForm: FormGroup;

  constructor() { }

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
    this.baseForm = new FormGroup({
      lokalizacja: new FormControl(),
      liczbaMiejsc: new FormControl(),
    });
  }

}
