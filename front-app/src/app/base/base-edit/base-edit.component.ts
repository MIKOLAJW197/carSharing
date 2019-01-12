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

  constructor(private apiService: ApiService,
              private router: Router,
              private routeWithData: RouteWithDataService) {
  }

  ngOnInit() {
    this.initForm();
    this.base = (this.routeWithData.data) as Base;
    this.patchForm();
  }


  onSubmit() {
    const base = {
      id: this.base.id,
      lokalizacja: this.baseForm.get('lokalizacja').value,
      liczba_miejsc: this.baseForm.get('liczbaMiejsc').value,
    };
    // console.log(user);
    this.apiService.updateBase(base).subscribe(resp => this.router.navigate(['/base']));
  }

  onDeleteClick() {
    if (window.confirm('Are sure you want to delete this item ?')) {
      this.apiService.delBase(this.base).subscribe(
        resp => this.router.navigate(['/base']));
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
