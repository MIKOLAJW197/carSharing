import {Injectable} from '@angular/core';
import {Data, NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RouteWithDataService {

  private currentData: Data = {};
  private nextData: Data = {};

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((e: NavigationEnd) => {
      this.currentData = this.nextData;
      this.nextData = {};
    });
  }

  reset() {
    this.currentData = {};
    this.nextData = {};
  }

  get data(): Data {
    return this.currentData;
  }

  navigateWithRouteData(data: Data, commands, extras = {skipLocationChange: false}) {
    this.nextData = data;
    this.router.navigate(commands, extras);
  }
}
