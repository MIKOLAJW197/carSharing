import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../api/api.service";
import {Router} from "@angular/router";
import {Sort} from "@angular/material";
import {RouteWithDataService} from "../../route-with-data.service";

export interface Base {
  id: number;
  lokalizacja: string;
  liczba_miejsc: number;
}


@Component({
  selector: 'app-base-list',
  templateUrl: './base-list.component.html',
  styleUrls: ['./base-list.component.css']
})
export class BaseListComponent implements OnInit {
  data: Base[];

  constructor(private api: ApiService,
              private router: Router,
              private routeWithData: RouteWithDataService) {
    this.data = [];
  }

  ngOnInit() {
    this.api.getAllBases().subscribe(resp => {
      this.data = resp;
      this.sortedData = this.data.slice();
    });
  }

  onEditClick(base: Base) {
    // todo przekierowywanie z id lub z z danymi z formatki
    this.routeWithData.navigateWithRouteData(base,['/base-edit']);
  }

  sortedData: Base[];

  sortData(sort: Sort) {
    const data = this.data.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return compare(a.lokalizacja, b.lokalizacja, isAsc);
        case 'count':
          return compare(a.liczba_miejsc, b.liczba_miejsc, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
