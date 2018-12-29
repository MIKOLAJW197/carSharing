import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  endpoint = '//localhost:8080/';

  constructor(private http: HttpClient) {
  }

  getAllCars(): Observable<any> {
    return this.http.get(this.endpoint + 'samochod');
  }

  getAllUsers(): Observable<any> {
    return this.http.get(this.endpoint + 'uzytkownik');
  }

  getAllRides(): Observable<any> {
    return this.http.get(this.endpoint + 'przejazd');
  }

  getAllBases(): Observable<any> {
    return this.http.get(this.endpoint + 'baza');
  }

  getAllTariffs(): Observable<any> {
    return this.http.get(this.endpoint + 'cennik');
  }

  getAllTopUps(): Observable<any> {
    return this.http.get(this.endpoint + 'doladowanie_konta');
  }

  getAllCollisions(): Observable<any> {
    return this.http.get(this.endpoint + 'kolizja');
  }

  getAllParkings(): Observable<any> {
    return this.http.get(this.endpoint + 'parking');
  }
}
