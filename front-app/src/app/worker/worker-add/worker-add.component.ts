import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Base} from "../../base/base-list/base-list.component";
import {RouteWithDataService} from "../../route-with-data.service";
import {ApiService} from "../../api/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-worker-add',
  templateUrl: './worker-add.component.html',
  styleUrls: ['./worker-add.component.css']
})
export class WorkerAddComponent implements OnInit {


  workerForm: FormGroup;
  bases: Base[];

  constructor(private apiService: ApiService,
              private router: Router,
              private routeWithDataService: RouteWithDataService) {
  }

  ngOnInit() {
    this.initForm();
    this.apiService.getAllBases().subscribe(resp => this.bases = resp);
  }

  onSubmit() {
    let worker = {
      pesel: this.workerForm.get('pesel').value,
      imie: this.workerForm.get('imie').value,
      nazwisko: this.workerForm.get('nazwisko').value,
      baza_id: this.workerForm.get('bazaLokalizacja').value
    };
    this.apiService.addWorker(worker).subscribe(resp => this.router.navigate(['/workers']));
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
