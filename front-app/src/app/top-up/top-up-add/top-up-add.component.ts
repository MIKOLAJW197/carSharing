import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ApiService} from "../../api/api.service";
import {Router} from "@angular/router";
import {User} from "../../user/user-list/user-list.component";

@Component({
  selector: 'app-top-up-add',
  templateUrl: './top-up-add.component.html',
  styleUrls: ['./top-up-add.component.css']
})
export class TopUpAddComponent implements OnInit {

  topupForm: FormGroup;
  users: User[];

  constructor(private apiService: ApiService,
              private router: Router) {
  }

  ngOnInit() {
    this.initForm();
    this.apiService.getAllUsers().subscribe(resp => this.users = resp);
  }

  onSubmit() {
    const top = {
      data: this.topupForm.get('data').value,
      kwota: this.topupForm.get('kwota').value,
      sposob_platnosci: this.topupForm.get('sposobPlatnosci').value,
      uzytkownik_id: this.topupForm.get('uzytkownikMail').value,
    };
    // console.log(user);
    this.apiService.addTopup(top).subscribe(resp => this.router.navigate(['/top-up']));
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
