import { Component, OnInit } from '@angular/core';
import {RouteWithDataService} from "../../route-with-data.service";
import {ApiService} from "../../api/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-base-edit',
  templateUrl: './base-edit.component.html',
  styleUrls: ['./base-edit.component.css']
})
export class BaseEditComponent implements OnInit {

  constructor(private api: ApiService,
              private router: Router,
              private routeWithData: RouteWithDataService) { }

  ngOnInit() {
    //TOCHECK
    console.log(this.routeWithData.data);
  }

}
