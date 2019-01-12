import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ApiService} from "../../api/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  userForm: FormGroup;

  constructor(private apiService: ApiService,
              private router: Router) {
  }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    const user = {
      pesel: this.userForm.get('pesel').value,
      mail: this.userForm.get('mail').value,
      haslo: this.userForm.get('haslo').value,
      imie: this.userForm.get('imie').value,
      nazwisko: this.userForm.get('nazwisko').value,
      stan_skarbonki: this.userForm.get('stanSkarbonki').value,
    };
    // console.log(user);
    this.apiService.addUser(user).subscribe(resp => this.router.navigate(['/users']));
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
