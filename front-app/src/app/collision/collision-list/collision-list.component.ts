import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../api/api.service";
import {Router} from "@angular/router";
import {Sort} from "@angular/material";
import {RouteWithDataService} from "../../route-with-data.service";

export interface Collision {
  id: number;
  lokalizacja: string;
  data: Date;
  przejazdDataRozpoczecia: Date;
  przejazdUzytkownikMail: string;
  przejazdNrRejestracyjny: string;
  pracownikPesel: number;
  pracownikLokalizacja: string;
}


@Component({
  selector: 'app-collision-list',
  templateUrl: './collision-list.component.html',
  styleUrls: ['./collision-list.component.css']
})
export class CollisionListComponent implements OnInit {

  data: Collision[];

  constructor(private api: ApiService,
              private router: Router,
              private routeWithData: RouteWithDataService) {
    this.data = [];
  }

  ngOnInit() {
    this.api.getAllCollisions().subscribe(resp => {
      this.data = resp;
      this.sortedData = this.data.slice();
    });
  }

  onEditClick(collision: Collision) {
    // todo przekierowywanie z id lub z z danymi z formatki
    // this.router.navigate(['/collision-edit']);
    this.routeWithData.navigateWithRouteData(collision,['/collision-edit']);
  }

  sortedData: Collision[];

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
        case 'localization':
          return compare(a.lokalizacja, b.lokalizacja, isAsc);
        case 'date':
          return compare(a.data, b.data, isAsc);
        case 'dateStart':
          return compare(a.przejazdDataRozpoczecia, b.przejazdDataRozpoczecia, isAsc);
        case 'mail':
          return compare(a.przejazdUzytkownikMail, b.przejazdUzytkownikMail, isAsc);
        case 'car':
          return compare(a.przejazdNrRejestracyjny, b.przejazdNrRejestracyjny, isAsc);
        case 'worker':
          return compare(a.pracownikPesel, b.pracownikPesel, isAsc);
        case 'worker-loc':
          return compare(a.pracownikLokalizacja, b.pracownikLokalizacja, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string | Date, b: number | string | Date, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
