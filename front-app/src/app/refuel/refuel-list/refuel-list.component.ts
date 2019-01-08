import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../api/api.service";
import {Router} from "@angular/router";
import {Sort} from "@angular/material";
import {RouteWithDataService} from "../../route-with-data.service";

export interface Refuel {
  id: number;
  siec_stacji: string;
  ile_litrow: number;
  kwota: number;
  przejazd_id: number;
}

@Component({
  selector: 'app-refuel-list',
  templateUrl: './refuel-list.component.html',
  styleUrls: ['./refuel-list.component.css']
})
export class RefuelListComponent implements OnInit {
  data: Refuel[];

  constructor(private api: ApiService,
              private router: Router,
              private routeWithData: RouteWithDataService) {
    this.data = [];
  }

  ngOnInit() {
    this.api.getAllRefuel().subscribe(resp => {
      this.data = resp;
      this.sortedData = this.data.slice();
    });
  }

  onEditClick(refuel: Refuel) {
    // todo przekierowywanie z id lub z z danymi z formatki
    // this.router.navigate(['/refuel-edit']);
    this.routeWithData.navigateWithRouteData(refuel,['/refuel-edit']);
  }

  sortedData: Refuel[];

  sortData(sort: Sort) {
    const data = this.data.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'ID':
          return compare(a.id, b.id, isAsc);
        case 'company':
          return compare(a.siec_stacji, b.siec_stacji, isAsc);
        case 'amount':
          return compare(a.ile_litrow, b.ile_litrow, isAsc);
        case 'price':
          return compare(a.kwota, b.kwota, isAsc);
        case 'ride':
          return compare(a.przejazd_id, b.przejazd_id, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string | Date, b: number | string | Date, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
