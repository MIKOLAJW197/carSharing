import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../api/api.service";
import {Router} from "@angular/router";
import {Sort} from "@angular/material";
import {RouteWithDataService} from "../../route-with-data.service";
import {forkJoin} from "rxjs/internal/observable/forkJoin";
import {Ride} from "../../ride/ride-list/ride-list.component";
import {User} from "../../user/user-list/user-list.component";
import {Car} from "../../car/car-list/car-list.component";

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
  rides: Ride[];
  users: User[];
  cars: Car[];

  constructor(private apiService: ApiService,
              private router: Router,
              private routeWithData: RouteWithDataService) {
    this.data = [];
  }

  ngOnInit() {
    forkJoin(
      this.apiService.getAllRefuel(),
      this.apiService.getAllRides(),
      this.apiService.getAllUsers(),
      this.apiService.getAllCars()
    )
      .subscribe(([res1, res2, res3, res4]) => {
        this.data = res1;
        this.sortedData = this.data.slice();
        this.rides = res2;
        this.users = res3;
        this.cars = res4;
      });
  }

  onEditClick(refuel: Refuel) {
    // todo przekierowywanie z id lub z z danymi z formatki
    // this.router.navigate(['/refuel-edit']);
    this.routeWithData.navigateWithRouteData(refuel, ['/refuel-edit']);
  }

  getRideInfo(id: number) {
    let userID =  this.rides.filter(przejazd => przejazd.id === id).map(user => user.uzytkownik_id)[0];
    let carID =  this.rides.filter(przejazd => przejazd.id === id).map(car => car.samochod_id)[0];
    let carRej = this.cars.filter(car => car.id === carID).map(car => car.nr_rejestracyjny);
    return this.users.filter(user => user.id === userID).map(user => user.imie + ' '+ user.nazwisko) + '  Przejazd nr. '+ id + '  Samochod nr: '+ carRej;
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
