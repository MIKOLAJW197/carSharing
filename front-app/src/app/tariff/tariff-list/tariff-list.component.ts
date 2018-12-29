import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../api/api.service";
import {Base} from "../../base/base-list/base-list.component";
import {Router} from "@angular/router";
import {Sort} from "@angular/material";

export interface Tariff {
  odKiedy: Date;
  doKiedy: Date;
  cenaKilometra: number;
  cenaMinuty: number;
}

@Component({
  selector: 'app-tariff-list',
  templateUrl: './tariff-list.component.html',
  styleUrls: ['./tariff-list.component.css']
})
export class TariffListComponent implements OnInit {
  data: Tariff[];

  constructor(private api: ApiService,
              private router: Router) {
    this.data = [];
  }

  ngOnInit() {
    this.api.getAllTariffs().subscribe(resp => {
      this.data = resp;
      this.sortedData = this.data.slice();
    });
  }

  onEditClick(tariff: Tariff) {
    // todo przekierowywanie z id lub z z danymi z formatki
    this.router.navigate(['/tariff-edit']);
  }

  sortedData: Tariff[];

  sortData(sort: Sort) {
    const data = this.data.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'dateStart':
          return compare(a.odKiedy, b.odKiedy, isAsc);
        case 'dateStop':
          return compare(a.doKiedy, b.doKiedy, isAsc);
        case 'priceDist':
          return compare(a.cenaKilometra, b.cenaKilometra, isAsc);
        case 'priceTime':
          return compare(a.cenaMinuty, b.cenaMinuty, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string | Date, b: number | string | Date, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
