import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../api/api.service";
import {Sort} from "@angular/material";
import {Router} from "@angular/router";
import {RouteWithDataService} from "../../route-with-data.service";

export interface User {
  id: number;
  pesel: string;
  mail: string;
  haslo: string;
  imie: string;
  nazwisko: string;
  stan_skarbonki: number;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {

  data: User[];
  showPassword: boolean;

  constructor(private api: ApiService,
              private router: Router,
              private routeWithData: RouteWithDataService) {
    this.data = [];
    this.showPassword = false;
  }

  ngOnInit() {
    this.api.getAllUsers().subscribe(resp => {
      this.data = resp;
      this.sortedData = this.data.slice();
    });
  }

  onEditClick(user: User) {
    // todo przekierowywanie z id lub z z danymi z formatki
    // this.router.navigate(['/user-edit']);
    this.routeWithData.navigateWithRouteData(user,['/user-edit']);
  }

  sortedData: User[];

  sortData(sort: Sort) {
    const data = this.data.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'mail':
          return compare(a.mail, b.mail, isAsc);
        case 'haslo':
          return compare(a.haslo, b.haslo, isAsc);
        case 'imie':
          return compare(a.imie, b.nazwisko, isAsc);
        case 'nazwisko':
          return compare(a.nazwisko, b.nazwisko, isAsc);
        case 'pesel':
          return compare(a.pesel, b.pesel, isAsc);
        case 'konto':
          return compare(a.stan_skarbonki, b.stan_skarbonki, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
