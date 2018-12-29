import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../api/api.service";
import {Router} from "@angular/router";
import {Sort} from "@angular/material";

export interface Worker {
  pesel: number;
  imie: string;
  nazwisko: string;
  bazaLokalizacja: string;
}

@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.css']
})
export class WorkerListComponent implements OnInit {

  data: Worker[];

  constructor(private api: ApiService,
              private router: Router) {
    this.data = [];
  }

  ngOnInit() {
    this.api.getAllWorkers().subscribe(resp => {
      this.data = resp;
      this.sortedData = this.data.slice();
    });
  }

  onEditClick(worker: Worker) {
    // todo przekierowywanie z id lub z z danymi z formatki
    this.router.navigate(['/workers-edit']);
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
        case 'pesel':
          return compare(a.pesel, b.pesel, isAsc);
        case 'imie':
          return compare(a.imie, b.imie, isAsc);
        case 'nazwisko':
          return compare(a.nazwisko, b.nazwisko, isAsc);
        case 'baza':
          return compare(a.bazaLokalizacja, b.bazaLokalizacja, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string | Date, b: number | string | Date, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

