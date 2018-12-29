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
}
