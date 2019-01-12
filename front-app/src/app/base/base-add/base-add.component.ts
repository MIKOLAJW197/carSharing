import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ApiService} from "../../api/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-base-add',
  templateUrl: './base-add.component.html',
  styleUrls: ['./base-add.component.css']
})
export class BaseAddComponent implements OnInit {

  baseForm: FormGroup;

  constructor(private apiService: ApiService,
              private router: Router) {
  }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    const base = {
      lokalizacja: this.baseForm.get('lokalizacja').value,
      liczba_miejsc: this.baseForm.get('liczbaMiejsc').value,
    };
    // console.log(user);
    this.apiService.addBase(base).subscribe(resp => this.router.navigate(['/base']));
  }

  private initForm() {
    this.baseForm = new FormGroup({
      lokalizacja: new FormControl(),
      liczbaMiejsc: new FormControl(),
    });
  }

}
