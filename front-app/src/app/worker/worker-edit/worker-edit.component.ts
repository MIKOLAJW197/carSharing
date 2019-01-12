import { Component, OnInit } from '@angular/core';
import {RouteWithDataService} from "../../route-with-data.service";
import {Base} from "../../base/base-list/base-list.component";
import {FormControl, FormGroup} from "@angular/forms";
import {ApiService} from "../../api/api.service";
import {Router} from "@angular/router";
import {Worker} from "../worker-list/worker-list.component";

@Component({
  selector: 'app-worker-edit',
  templateUrl: './worker-edit.component.html',
  styleUrls: ['./worker-edit.component.css']
})
export class WorkerEditComponent implements OnInit {

  workerForm: FormGroup;
  bases: Base[];
  worker: Worker;

  constructor(private apiService: ApiService,
              private router: Router,
              private routeWithDataService: RouteWithDataService) {
  }

  ngOnInit() {
    this.initForm();
    this.worker = (this.routeWithDataService.data) as Worker;
    this.apiService.getAllBases().subscribe(resp => this.bases = resp);
    this.patchForm();
  }

  onSubmit() {
    let worker = {
      id: this.worker.id,
      pesel: this.workerForm.get('pesel').value,
      imie: this.workerForm.get('imie').value,
      nazwisko: this.workerForm.get('nazwisko').value,
      baza_id: this.workerForm.get('bazaLokalizacja').value
    };
    this.apiService.updateWorker(worker).subscribe(resp => this.router.navigate(['/workers']));
  }

  onDeleteClick() {
    if (window.confirm('Are sure you want to delete this item ?')) {
      this.apiService.delWorker(this.worker).subscribe(
        resp => this.router.navigate(['/workers']));
    }
  }

  private initForm() {
    this.workerForm = new FormGroup({
      pesel: new FormControl(),
      imie: new FormControl(),
      nazwisko: new FormControl(),
      bazaLokalizacja: new FormControl()
    });
  }
  private patchForm() {
    this.workerForm.get('pesel').patchValue(this.worker.pesel);
    this.workerForm.get('imie').patchValue(this.worker.imie);
    this.workerForm.get('nazwisko').patchValue(this.worker.nazwisko);
    this.workerForm.get('bazaLokalizacja').patchValue(this.worker.baza_id);
  }
}
