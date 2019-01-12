import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../api/api.service";
import {Router} from "@angular/router";
import {Sort} from "@angular/material";
import {forkJoin} from "rxjs/internal/observable/forkJoin";
import {Base} from "../../base/base-list/base-list.component";
import {RouteWithDataService} from "../../route-with-data.service";

export interface Worker {
  id: number;
  pesel: number;
  imie: string;
  nazwisko: string;
  baza_id: string;
}

@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.css']
})
export class WorkerListComponent implements OnInit {

  data: Worker[];
  bases: Base[];

  constructor(private apiService: ApiService,
              private router: Router,
              private routeWithData: RouteWithDataService) {
    this.data = [];
  }

  ngOnInit() {

    forkJoin(
      this.apiService.getAllWorkers(),
      this.apiService.getAllBases()
    )
      .subscribe(([res2, res3]) => {
        this.data = res2;
        this.sortedData = this.data.slice();
        this.bases = res3;
      });
  }

  onEditClick(worker: Worker) {
    // todo przekierowywanie z id lub z z danymi z formatki
    this.routeWithData.navigateWithRouteData(worker,['/workers-edit']);
  }

  getBaseName(id: number){
    return this.bases.filter(value => value.id === id).map(value => value.lokalizacja);
  }

  sortedData: Worker[];

  sortData(sort: Sort) {
    const data = this.data.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id':
          return compare(a.id, b.id, isAsc);
        case 'pesel':
          return compare(a.pesel, b.pesel, isAsc);
        case 'imie':
          return compare(a.imie, b.imie, isAsc);
        case 'nazwisko':
          return compare(a.nazwisko, b.nazwisko, isAsc);
        case 'baza':
          return compare(a.baza_id, b.baza_id, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string | Date, b: number | string | Date, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

