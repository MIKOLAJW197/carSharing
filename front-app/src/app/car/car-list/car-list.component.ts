import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../api/api.service";
import {Dessert} from "../../user/user-list/user-list.component";
import {Router} from "@angular/router";
import {Sort} from "@angular/material";

export interface Car {
  nrRejestracyjny: string;
  dostepny: boolean;
  model: string;
  marka: string;
  przebieg: number;
  lokalizacjaPozaP: string;
  bazaLokalizacja: string;
  parkingLokalizacja: string;
}

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  data: Car[];

  constructor(private api: ApiService,
              private router: Router) {
    this.data = [];
  }

  ngOnInit() {
    this.api.getAllCars().subscribe(resp => {
      this.data = resp;
      this.sortedData = this.data.slice();
    });
  }

  onEditClick(user: Dessert) {
    // todo przekierowywanie z id lub z z danymi z formatki
    this.router.navigate(['/car-edit']);
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
          return compare(a.nrRejestracyjny, b.nrRejestracyjny, isAsc);
        case 'dostepny':
          return compare(a.dostepny, b.dostepny, isAsc);
        case 'model':
          return compare(a.model, b.model, isAsc);
        case 'marka':
          return compare(a.marka, b.marka, isAsc);
        case 'przebieg':
          return compare(a.przebieg, b.przebieg, isAsc);
        case 'lokalizacja':
          return compare(a.lokalizacjaPozaP, b.lokalizacjaPozaP, isAsc);
        case 'baza':
          return compare(a.bazaLokalizacja, b.bazaLokalizacja, isAsc);
        case 'parking':
          return compare(a.parkingLokalizacja, b.parkingLokalizacja, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string | boolean, b: number | string | boolean, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
