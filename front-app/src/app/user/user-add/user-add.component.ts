import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ApiService} from "../../api/api.service";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  userForm: FormGroup;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    const user = {
      mail: this.userForm.get('mail').value,
      haslo: this.userForm.get('haslo').value,
      imie: this.userForm.get('imie').value,
      nazwisko: this.userForm.get('nazwisko').value,
      pesel: this.userForm.get('pesel').value,
      stan_skarbonki: this.userForm.get('stanSkarbonki').value,
    };
    // console.log(user);
    this.apiService.addUser(user).subscribe(resp => console.log(resp));
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
}
