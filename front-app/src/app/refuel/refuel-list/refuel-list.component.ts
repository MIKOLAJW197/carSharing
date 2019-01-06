import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../api/api.service";
import {Router} from "@angular/router";
import {Sort} from "@angular/material";
import {RouteWithDataService} from "../../route-with-data.service";

export interface Refuel {
  id: number;
  siecStacji: string;
  ileLitrow: number;
  kwota: number;
  przejazdDataRozpoczecia: Date;
  przejazdUzytkownikMail: string;
  przejazdNrRejestracyjny: string;
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
          return compare(a.siecStacji, b.siecStacji, isAsc);
        case 'amount':
          return compare(a.ileLitrow, b.ileLitrow, isAsc);
        case 'price':
          return compare(a.kwota, b.kwota, isAsc);
        case 'dateStart':
          return compare(a.przejazdDataRozpoczecia, b.przejazdDataRozpoczecia, isAsc);
        case 'mail':
          return compare(a.przejazdUzytkownikMail, b.przejazdUzytkownikMail, isAsc);
        case 'car':
          return compare(a.przejazdNrRejestracyjny, b.przejazdNrRejestracyjny, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string | Date, b: number | string | Date, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
