import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs/internal/observable/throwError";

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

  getAllTopUpsForID(id: number): Observable<any> {
    return this.http.get(this.endpoint + 'doladowanie_konta?id=' + id);
  }

  topUpAllUsers(value: number): Observable<any> {
    return this.http.get(this.endpoint + 'doladuj_wszystkim/' + value );
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
        catchError(this.handleError));
  }

  addBase(base: any): Observable<any> {
    return this.http.post<any>(this.endpoint + 'baza', base, this.httpOptions)
      .pipe(
        catchError(this.handleError));
  }

  addParking(parking: any): Observable<any> {
    return this.http.post<any>(this.endpoint + 'parking', parking, this.httpOptions)
      .pipe(
        catchError(this.handleError));
  }

  addTariff(tarif: any): Observable<any> {
    return this.http.post<any>(this.endpoint + 'cennik', tarif, this.httpOptions)
      .pipe(
        catchError(this.handleError));
  }

  addTopup(top: any): Observable<any> {
    return this.http.post<any>(this.endpoint + 'doladowanie_konta', top, this.httpOptions)
      .pipe(
        catchError(this.handleError));
  }

  addCar(car: any): Observable<any> {
    return this.http.post<any>(this.endpoint + 'samochod', car, this.httpOptions)
      .pipe(
        catchError(this.handleError));
  }

  addRide(ride: any): Observable<any> {
    return this.http.post<any>(this.endpoint + 'przejazd', ride, this.httpOptions)
      .pipe(
        catchError(this.handleError));
  }

  addCollision(col: any): Observable<any> {
    return this.http.post<any>(this.endpoint + 'kolizja', col, this.httpOptions)
      .pipe(
        catchError(this.handleError));
  }

  addWork(work: any): Observable<any> {
    return this.http.post<any>(this.endpoint + 'prace_techniczne', work, this.httpOptions)
      .pipe(
        catchError(this.handleError));
  }

  addWorker(work: any): Observable<any> {
    return this.http.post<any>(this.endpoint + 'pracownik', work, this.httpOptions)
      .pipe(
        catchError(this.handleError));
  }

  addRefuel(ref: any): Observable<any> {
    return this.http.post<any>(this.endpoint + 'tankowanie', ref, this.httpOptions)
      .pipe(
        catchError(this.handleError));
  }


  //UPDATE

  updateUser(user: any): Observable<any> {
    return this.http.put(this.endpoint + 'uzytkownik/' + user.id, user, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateBase(base: any): Observable<any> {
    return this.http.put(this.endpoint + 'baza/' + base.id, base, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateParking(parking: any): Observable<any> {
    return this.http.put(this.endpoint + 'parking/' + parking.id, parking, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateTariff(tariff: any): Observable<any> {
    return this.http.put(this.endpoint + 'cennik/' + tariff.id, tariff, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateTop(top: any): Observable<any> {
    return this.http.put(this.endpoint + 'doladowanie_konta/' + top.id, top, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateCar(car: any): Observable<any> {
    return this.http.put(this.endpoint + 'samochod/' + car.id, car, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateRide(ride: any): Observable<any> {
    return this.http.put(this.endpoint + 'przejazd/' + ride.id, ride, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateCollision(col: any): Observable<any> {
    return this.http.put(this.endpoint + 'kolizja/' + col.id, col, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateWork(work: any): Observable<any> {
    return this.http.put(this.endpoint + 'prace_techniczne/' + work.id, work, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateWorker(work: any): Observable<any> {
    return this.http.put(this.endpoint + 'pracownik/' + work.id, work, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateRef(ref: any): Observable<any> {
    return this.http.put(this.endpoint + 'tankowanie/' + ref.id, ref, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  //DEL

  delUser(user: any): Observable<{}> {
    return this.http.delete(this.endpoint + 'uzytkownik/' + user.id, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  delBase(base: any): Observable<any> {
    return this.http.delete(this.endpoint + 'baza/' + base.id, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  delCar(car: any): Observable<any> {
    return this.http.delete(this.endpoint + 'samochod/' + car.id, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  delCollision(collision: any): Observable<any> {
    return this.http.delete(this.endpoint + 'kolizja/' + collision.id, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  delParking(parking: any): Observable<any> {
    return this.http.delete(this.endpoint + 'parking/' + parking.id, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  delRefuel(refuel: any): Observable<any> {
    return this.http.delete(this.endpoint + 'tankowanie/' + refuel.id, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  delRide(ride: any): Observable<any> {
    return this.http.delete(this.endpoint + 'przejazd/' + ride.id, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  delTariff(tariff: any): Observable<any> {
    return this.http.delete(this.endpoint + 'cennik/' + tariff.id, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  delTop(top: any): Observable<any> {
    return this.http.delete(this.endpoint + 'doladowanie_konta/' + top.id, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  delWork(work: any): Observable<any> {
    return this.http.delete(this.endpoint + 'prace_techniczne/' + work.id, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  delWorker(work: any): Observable<any> {
    return this.http.delete(this.endpoint + 'pracownik/' + work.id, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      alert(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
