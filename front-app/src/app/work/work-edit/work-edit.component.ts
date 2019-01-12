import { Component, OnInit } from '@angular/core';
import {RouteWithDataService} from "../../route-with-data.service";
import {Base} from "../../base/base-list/base-list.component";
import {FormControl, FormGroup} from "@angular/forms";
import {Car} from "../../car/car-list/car-list.component";
import {ApiService} from "../../api/api.service";
import {Router} from "@angular/router";
import {Work} from "../work-list/work-list.component";
import {forkJoin} from "rxjs/internal/observable/forkJoin";
import {Parking} from "../../parking/parking-list/parking-list.component";

@Component({
  selector: 'app-work-edit',
  templateUrl: './work-edit.component.html',
  styleUrls: ['./work-edit.component.css']
})
export class WorkEditComponent implements OnInit {

  cars: Car[];
  bases: Base[];
  work: Work;

  workForm: FormGroup;

  constructor(private apiService: ApiService,
              private router: Router,
              private routeWithDataService: RouteWithDataService) {
  }

  ngOnInit() {
    this.initForm();
    forkJoin(
      this.apiService.getAllCars(),
      this.apiService.getAllBases()
    )
      .subscribe(([res2, res3]) => {
        this.cars = res2;
        this.bases = res3;
      });
    this.work = (this.routeWithDataService.data) as Work;
    this.patchForm();
  }

  onSubmit() {
    let work = {
      id: this.work.id,
      co_robione: this.workForm.get('coRobione').value,
      od_kiedy: this.workForm.get('odKiedy').value,
      do_kiedy: this.workForm.get('doKiedy').value,
      baza_id: this.workForm.get('bazaLokalizacja').value,
      samochod_id: this.workForm.get('samochodNrRejestracyjny').value
    };
    this.apiService.updateWork(work).subscribe(resp=> this.router.navigate(['/tech']))
  }


  onDeleteClick() {
    if (window.confirm('Are sure you want to delete this item ?')) {
      this.apiService.delWork(this.work).subscribe(
        resp => this.router.navigate(['/tech']));
    }
  }

  private initForm() {
    this.workForm = new FormGroup({
      coRobione: new FormControl(),
      odKiedy: new FormControl(),
      doKiedy: new FormControl(),
      bazaLokalizacja: new FormControl(),
      samochodNrRejestracyjny: new FormControl()
    });
  }

  private patchForm(){
    this.workForm.get('coRobione').patchValue(this.work.co_robione);
    this.workForm.get('odKiedy').patchValue(this.work.od_kiedy);
    this.workForm.get('doKiedy').patchValue(this.work.do_kiedy);
    this.workForm.get('bazaLokalizacja').patchValue(this.work.baza_id);
    this.workForm.get('samochodNrRejestracyjny').patchValue(this.work.samochod_id);
  }
}
