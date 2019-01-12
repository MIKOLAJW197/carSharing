import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../api/api.service";
import {Router} from "@angular/router";
import {Sort} from "@angular/material";
import {RouteWithDataService} from "../../route-with-data.service";
import {forkJoin} from "rxjs/internal/observable/forkJoin";
import {Ride} from "../../ride/ride-list/ride-list.component";
import {Worker} from "../../worker/worker-list/worker-list.component";
import {User} from "../../user/user-list/user-list.component";
import {Car} from "../../car/car-list/car-list.component";

export interface Collision {
  id: number;
  lokalizacja: string;
  data: Date;
  pracownik_id: number;
  przejazd_id: number;
}


@Component({
  selector: 'app-collision-list',
  templateUrl: './collision-list.component.html',
  styleUrls: ['./collision-list.component.css']
})
export class CollisionListComponent implements OnInit {

  data: Collision[];
  rides: Ride[];
  workers: Worker[];
  users: User[];
  cars: Car[];

  constructor(private apiService: ApiService,
              private router: Router,
              private routeWithData: RouteWithDataService) {
    this.data = [];
  }

  ngOnInit() {
    forkJoin(
      this.apiService.getAllCollisions(),
      this.apiService.getAllRides(),
      this.apiService.getAllWorkers(),
      this.apiService.getAllUsers(),
      this.apiService.getAllCars(),
    )
      .subscribe(([res1, res2, res3, res4, res5]) => {
        this.data = res1;
        this.sortedData = this.data.slice();
        this.rides = res2;
        this.workers = res3;
        this.users = res4;
        this.cars = res5;
      });
  }

  onEditClick(collision: Collision) {
    // todo przekierowywanie z id lub z z danymi z formatki
    // this.router.navigate(['/collision-edit']);
    this.routeWithData.navigateWithRouteData(collision, ['/collision-edit']);
  }

  getUserNameFromRideID(id: number) {
    let userID =  this.rides.filter(przejazd => przejazd.id === id).map(user => user.uzytkownik_id)[0];
    let carID =  this.rides.filter(przejazd => przejazd.id === id).map(car => car.samochod_id)[0];
    let carRej = this.cars.filter(car => car.id === carID).map(car => car.nr_rejestracyjny);
    return this.users.filter(user => user.id === userID).map(user => user.imie + ' '+ user.nazwisko) + '  Przejazd nr. '+ id + '  Samochod nr: '+ carRej;
  }

  getWorkerName(id: number) {
    return this.workers.filter(value => value.id === id).map(value => value.imie + ' ' +  value.nazwisko);
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
        case 'ride':
          return compare(a.przejazd_id, b.przejazd_id, isAsc);
        case 'worker':
          return compare(a.pracownik_id, b.pracownik_id, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string | Date, b: number | string | Date, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
