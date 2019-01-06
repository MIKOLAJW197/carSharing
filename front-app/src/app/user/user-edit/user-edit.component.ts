import { Component, OnInit } from '@angular/core';
import {RouteWithDataService} from "../../route-with-data.service";
import {ApiService} from "../../api/api.service";
import {FormControl, FormGroup} from "@angular/forms";
import {User} from "../user-list/user-list.component";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  userForm: FormGroup;
  user: User;

  constructor(private apiService: ApiService,
              private routeWithData: RouteWithDataService) {
  }

  ngOnInit() {
    this.initForm();
    this.user = (this.routeWithData.data) as User;
    this.patchForm();
  }

  onSubmit() {

  }

  onDeleteClick() {
      if(window.confirm('Are sure you want to delete this item ?')){
        //put your delete method logic here
        // this.apiservice.delete
      }
  }

  private initForm() {
    this.userForm = new FormGroup({
      mail: new FormControl(),
      haslo: new FormControl(),
      imie: new FormControl(),
      nazwisko: new FormControl(),
      pesel: new FormControl(),
      stanSkarbonki: new FormControl()
    });
  }

  private patchForm() {
    this.userForm.get('mail').patchValue(this.user.mail);
    this.userForm.get('haslo').patchValue(this.user.haslo);
    this.userForm.get('imie').patchValue(this.user.imie);
    this.userForm.get('nazwisko').patchValue(this.user.nazwisko);
    this.userForm.get('pesel').patchValue(this.user.pesel);
    this.userForm.get('stanSkarbonki').patchValue(this.user.stan_skarbonki);
  }

}
