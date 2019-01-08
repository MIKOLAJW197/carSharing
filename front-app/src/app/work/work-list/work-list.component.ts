import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../api/api.service";
import {Collision} from "../../collision/collision-list/collision-list.component";
import {Router} from "@angular/router";
import {Sort} from "@angular/material";

export interface Work {
  id: number;
  co_robione: string;
  od_kiedy: Date;
  do_kiedy: Date;
  baza_id: number;
  samochod_id: number;
}

@Component({
  selector: 'app-work-list',
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.css']
})
export class WorkListComponent implements OnInit {
  data: Work[];

  constructor(private api: ApiService,
              private router: Router) {
    this.data = [];
  }

  ngOnInit() {
    this.api.getAllTechnicalWorks().subscribe(resp => {
      this.data = resp;
      this.sortedData = this.data.slice();
    });
  }

  onEditClick(collision: Collision) {
    // todo przekierowywanie z id lub z z danymi z formatki
    this.router.navigate(['/tech-edit']);
  }

  sortedData: Work[];

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
        case 'work':
          return compare(a.co_robione, b.co_robione, isAsc);
        case 'dateStart':
          return compare(a.od_kiedy, b.od_kiedy, isAsc);
        case 'dateStop':
          return compare(a.do_kiedy, b.do_kiedy, isAsc);
        case 'base':
          return compare(a.baza_id, b.baza_id, isAsc);
        case 'car':
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
