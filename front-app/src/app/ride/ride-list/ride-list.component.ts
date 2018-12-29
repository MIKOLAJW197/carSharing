import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../api/api.service";
import {Router} from "@angular/router";
import {Sort} from "@angular/material";

export interface Ride {
  dataRozpoczecia: Date;
  dataZakonczenia: Date;
  dystans: number;
  lokalizacjaPoczatkowa: string;
  lokalizacjaKoncowa: string;
  uzytkownikMail: string;
  cennikOdKiedy: Date;
  samochodNrRejestracyjny: string;
}

@Component({
  selector: 'app-ride-list',
  templateUrl: './ride-list.component.html',
  styleUrls: ['./ride-list.component.css']
})
export class RideListComponent implements OnInit {
  data: Ride[];

  constructor(private api: ApiService,
              private router: Router) {
    this.data = [];
  }

  ngOnInit() {
    this.api.getAllRides().subscribe(resp => {
      this.data = resp;
      this.sortedData = this.data.slice();
    });
  }

  onEditClick(ride: Ride) {
    // todo przekierowywanie z id lub z z danymi z formatki
    this.router.navigate(['/ride-edit']);
  }

  sortedData: Ride[];

  sortData(sort: Sort) {
    const data = this.data.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'dataStart':
          return compare(a.dataRozpoczecia, b.dataRozpoczecia, isAsc);
        case 'dataStop':
          return compare(a.dataZakonczenia, b.dataZakonczenia, isAsc);
        case 'dystans':
          return compare(a.dystans, b.dystans, isAsc);
        case 'lokStart':
          return compare(a.lokalizacjaPoczatkowa, b.lokalizacjaPoczatkowa, isAsc);
        case 'lokStop':
          return compare(a.lokalizacjaKoncowa, b.lokalizacjaKoncowa, isAsc);
        case 'mail':
          return compare(a.uzytkownikMail, b.uzytkownikMail, isAsc);
        case 'cennik':
          return compare(a.cennikOdKiedy, b.cennikOdKiedy, isAsc);
        case 'samochod':
          return compare(a.samochodNrRejestracyjny, b.samochodNrRejestracyjny, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string | Date, b: number | string | Date, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
