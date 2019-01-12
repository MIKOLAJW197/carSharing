import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {forkJoin} from "rxjs/internal/observable/forkJoin";
import {RouteWithDataService} from "../../route-with-data.service";
import {ApiService} from "../../api/api.service";
import {Router} from "@angular/router";
import {Car} from "../../car/car-list/car-list.component";
import {Base} from "../../base/base-list/base-list.component";

@Component({
  selector: 'app-work-add',
  templateUrl: './work-add.component.html',
  styleUrls: ['./work-add.component.css']
})
export class WorkAddComponent implements OnInit {

  cars: Car[];
  bases: Base[];

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
  }

  onSubmit() {
    let work = {
      co_robione: this.workForm.get('coRobione').value,
      od_kiedy: this.workForm.get('odKiedy').value,
      do_kiedy: this.workForm.get('doKiedy').value,
      baza_id: this.workForm.get('bazaLokalizacja').value,
      samochod_id: this.workForm.get('samochodNrRejestracyjny').value
    };
    this.apiService.addWork(work).subscribe(resp=> this.router.navigate(['/tech']))
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
}
