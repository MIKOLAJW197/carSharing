import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../api/api.service";
import {Router} from "@angular/router";
import {Sort} from "@angular/material";

export interface Tariff {
  id: number;
  od_kiedy: Date;
  do_kiedy: Date;
  cena_kilometra: number;
  cena_minuty: number;
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
        case 'id':
          return compare(a.id, b.id, isAsc);
        case 'dateStart':
          return compare(a.od_kiedy, b.od_kiedy, isAsc);
        case 'dateStop':
          return compare(a.do_kiedy, b.do_kiedy, isAsc);
        case 'priceDist':
          return compare(a.cena_kilometra, b.cena_kilometra, isAsc);
        case 'priceTime':
          return compare(a.cena_minuty, b.cena_minuty, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string | Date, b: number | string | Date, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
