import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {of} from "rxjs/internal/observable/of";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  endpoint = '//localhost:3000/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    })
  };

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

  getAllTechnicalWorks(): Observable<any> {
    return this.http.get(this.endpoint + 'prace_techniczne');
  }

  getAllWorkers(): Observable<any> {
    return this.http.get(this.endpoint + 'pracownik');
  }

  getAllRefuel(): Observable<any> {
    return this.http.get(this.endpoint + 'tankowanie');
  }


  //ADD

  addUser(user: any): Observable<any> {
    return this.http.post<any>(this.endpoint + 'uzytkownik', user, this.httpOptions)
      .pipe(
        catchError(this.handleError('addUser', user))
      );
  }


  //UPDATE

  updateUser(user: any): Observable<any> {
    return this.http.put(this.endpoint + 'uzytkownik/' + user.pesel, user, this.httpOptions)
      .pipe(
        catchError(this.handleError('updateUser', user))
      );
  }

  //DEL

  delUser(user: any): Observable<any> {
    return this.http.delete(this.endpoint + 'uzytkownik/' + user.pesel, this.httpOptions)
      .pipe(
        catchError(this.handleError('delUser', user))
      );
  }

  delBase(base: any): Observable<any> { //TODO
    return this.http.delete(this.endpoint + 'baza/' + base, this.httpOptions)
      .pipe(
        catchError(this.handleError('delUser', base))
      );
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error('ERROR  ', operation, error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  };
}
