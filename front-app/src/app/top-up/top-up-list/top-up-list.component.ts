import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../api/api.service";
import {Router} from "@angular/router";
import {Sort} from "@angular/material";

export interface TopUp {
  id: number;
  data: Date;
  kwota: number;
  sposob_platnosci: string;
  uzytkownik_id: number;
}

@Component({
  selector: 'app-top-up-list',
  templateUrl: './top-up-list.component.html',
  styleUrls: ['./top-up-list.component.css']
})
export class TopUpListComponent implements OnInit {
  data: TopUp[];

  constructor(private api: ApiService,
              private router: Router) {
    this.data = [];
  }

  ngOnInit() {
    this.api.getAllTopUps().subscribe(resp => {
      this.data = resp;
      this.sortedData = this.data.slice();
    });
  }

  onEditClick(topUp: TopUp) {
    // todo przekierowywanie z id lub z z danymi z formatki
    this.router.navigate(['/top-up-edit']);
  }

  sortedData: TopUp[];

  sortData(sort: Sort) {
    const data = this.data.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'date':
          return compare(a.data, b.data, isAsc);
        case 'amount':
          return compare(a.kwota, b.kwota, isAsc);
        case 'type':
          return compare(a.sposob_platnosci, b.sposob_platnosci, isAsc);
        case 'mail':
          return compare(a.uzytkownik_id, b.uzytkownik_id, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string | Date, b: number | string | Date, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
