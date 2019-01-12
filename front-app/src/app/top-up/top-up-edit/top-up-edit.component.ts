import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {User} from "../../user/user-list/user-list.component";
import {ApiService} from "../../api/api.service";
import {Router} from "@angular/router";
import {RouteWithDataService} from "../../route-with-data.service";
import {Tariff} from "../../tariff/tariff-list/tariff-list.component";
import {TopUp} from "../top-up-list/top-up-list.component";

@Component({
  selector: 'app-top-up-edit',
  templateUrl: './top-up-edit.component.html',
  styleUrls: ['./top-up-edit.component.css']
})
export class TopUpEditComponent implements OnInit {

  topupForm: FormGroup;
  users: User[];
  top: TopUp;

  constructor(private apiService: ApiService,
              private router: Router,
              private routeWithData: RouteWithDataService) {
  }

  ngOnInit() {
    this.initForm();
    this.apiService.getAllUsers().subscribe(resp => this.users = resp);
    this.top = (this.routeWithData.data) as TopUp;
    this.patchForm();
  }

  onDeleteClick() {
    if (window.confirm('Are sure you want to delete this item ?')) {
      this.apiService.delTop(this.top).subscribe(
        resp => this.router.navigate(['/top-up']));
    }
  }

  onSubmit() {
    const top = {
      id: this.top.id,
      data: this.topupForm.get('data').value,
      kwota: this.topupForm.get('kwota').value,
      sposob_platnosci: this.topupForm.get('sposobPlatnosci').value,
      uzytkownik_id: this.topupForm.get('uzytkownikMail').value,
    };
    // console.log(user);
    this.apiService.updateTop(top).subscribe(resp => this.router.navigate(['/top-up']));
  }

  private initForm() {
    this.topupForm = new FormGroup({
      data: new FormControl(),
      kwota: new FormControl(),
      sposobPlatnosci: new FormControl(),
      uzytkownikMail: new FormControl()
    });
  }

  private patchForm() {
    this.topupForm.get('data').patchValue(this.top.data);
    this.topupForm.get('kwota').patchValue(this.top.kwota);
    this.topupForm.get('sposobPlatnosci').patchValue(this.top.sposob_platnosci);
    this.topupForm.get('uzytkownikMail').patchValue(this.top.uzytkownik_id);
  }
}
