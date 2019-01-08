import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../api/api.service";
import {Router} from "@angular/router";
import {Sort} from "@angular/material";
import {RouteWithDataService} from "../../route-with-data.service";

export interface Car {
  id: number;
  nr_rejestracyjny: string;
  dostepny: boolean;
  model: string;
  marka: string;
  przebieg: number;
  lokalizacja_poza_p: string;
  baza_id: string;
  parking_id: string;
}

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  data: Car[];

  constructor(private api: ApiService,
              private router: Router,
              private routeWithData: RouteWithDataService) {
    this.data = [];
  }

  ngOnInit() {
    this.api.getAllCars().subscribe(resp => {
      this.data = resp;
      this.sortedData = this.data.slice();
    });
  }

  onEditClick(car: Car) {
    // todo przekierowywanie z id lub z z danymi z formatki
    // this.router.navigate(['/car-edit']);
    this.routeWithData.navigateWithRouteData(car,['/car-edit']);
  }

  sortedData: Car[];

  sortData(sort: Sort) {
    const data = this.data.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'NrRejestracyjny':
          return compare(a.nr_rejestracyjny, b.nr_rejestracyjny, isAsc);
        case 'dostepny':
          return compare(a.dostepny, b.dostepny, isAsc);
        case 'model':
          return compare(a.model, b.model, isAsc);
        case 'marka':
          return compare(a.marka, b.marka, isAsc);
        case 'przebieg':
          return compare(a.przebieg, b.przebieg, isAsc);
        case 'lokalizacja':
          return compare(a.lokalizacja_poza_p, b.lokalizacja_poza_p, isAsc);
        case 'baza':
          return compare(a.baza_id, b.baza_id, isAsc);
        case 'parking':
          return compare(a.parking_id, b.parking_id, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string | boolean, b: number | string | boolean, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
