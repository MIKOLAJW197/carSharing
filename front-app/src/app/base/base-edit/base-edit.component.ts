import {Component, OnInit} from '@angular/core';
import {RouteWithDataService} from "../../route-with-data.service";
import {ApiService} from "../../api/api.service";
import {Router} from "@angular/router";
import {Base} from "../base-list/base-list.component";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-base-edit',
  templateUrl: './base-edit.component.html',
  styleUrls: ['./base-edit.component.css']
})
export class BaseEditComponent implements OnInit {

  baseForm: FormGroup;
  base: Base;

  constructor(private api: ApiService,
              private router: Router,
              private routeWithData: RouteWithDataService) {
  }

  ngOnInit() {
    this.initForm();
    this.base = (this.routeWithData.data) as Base;
    this.patchForm();
  }


  onSubmit() {

  }

  onDeleteClick() {
    if (window.confirm('Are sure you want to delete this item ?')) {
      //put your delete method logic here
      // this.apiservice.delete
    }
  }

  private initForm() {
    this.baseForm = new FormGroup({
      lokalizacja: new FormControl(),
      liczbaMiejsc: new FormControl(),
    });
  }

  private patchForm() {
    this.baseForm.get('lokalizacja').patchValue(this.base.lokalizacja);
    this.baseForm.get('liczbaMiejsc').patchValue(this.base.liczba_miejsc);
  }
}
