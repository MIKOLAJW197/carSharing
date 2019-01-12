import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../api/api.service";
import {Router} from "@angular/router";
import {Sort} from "@angular/material";
import {RouteWithDataService} from "../../route-with-data.service";
import {User} from "../../user/user-list/user-list.component";
import {Tariff} from "../../tariff/tariff-list/tariff-list.component";
import {Car} from "../../car/car-list/car-list.component";
import {forkJoin} from "rxjs/internal/observable/forkJoin";

export interface Ride {
  id: number;
  data_rozpoczecia: Date;
  data_zakonczenia: Date;
  dytans: number;
  lokalizacja_poczatkowa: string;
  lokalizacja_koncowa: string;
  uzytkownik_id: number;
  cennik_id: number;
  samochod_id: number;
}

@Component({
  selector: 'app-ride-list',
  templateUrl: './ride-list.component.html',
  styleUrls: ['./ride-list.component.css']
})
export class RideListComponent implements OnInit {
  data: Ride[];
  users: User[];
  tariffs: Tariff[];
  cars: Car[];

  constructor(private api: ApiService,
              private router: Router,
              private routeWithData: RouteWithDataService) {
    this.data = [];
  }

  ngOnInit() {

    forkJoin(
      this.api.getAllRides(),
      this.api.getAllUsers(),
      this.api.getAllTariffs(),
      this.api.getAllCars()
    )
      .subscribe(([res1, res2, res3, res4]) => {
        this.data = res1;
        this.sortedData = this.data.slice();
        this.users = res2;
        this.tariffs = res3;
        this.cars = res4;
      });

  }

  onEditClick(ride: Ride) {
    // todo przekierowywanie z id lub z z danymi z formatki
    // this.router.navigate(['/ride-edit']);
    this.routeWithData.navigateWithRouteData(ride, ['/ride-edit']);
  }

  getUserName(id: number) {
    return this.users.filter(value => value.id === id).map(value => value.mail);
  }

  getTariffDate(id: number) {
    return this.tariffs.filter(value => value.id === id).map(value => value.od_kiedy);
  }

  getCarName(id: number) {
    return this.cars.filter(value => value.id === id).map(value => value.nr_rejestracyjny);
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
          return compare(a.data_rozpoczecia, b.data_rozpoczecia, isAsc);
        case 'dataStop':
          return compare(a.data_zakonczenia, b.data_zakonczenia, isAsc);
        case 'dystans':
          return compare(a.dytans, b.dytans, isAsc);
        case 'lokStart':
          return compare(a.lokalizacja_poczatkowa, b.lokalizacja_poczatkowa, isAsc);
        case 'lokStop':
          return compare(a.lokalizacja_koncowa, b.lokalizacja_koncowa, isAsc);
        case 'mail':
          return compare(a.uzytkownik_id, b.uzytkownik_id, isAsc);
        case 'cennik':
          return compare(a.cennik_id, b.cennik_id, isAsc);
        case 'samochod':
          return compare(a.samochod_id, b.samochod_id, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string | Date, b: number | string | Date, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
