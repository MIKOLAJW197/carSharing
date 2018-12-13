import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../api/api.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: Array<any>;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    // this.carService.getAll().subscribe(data => {
    //   this.cars = data;
    // });
  }

}
