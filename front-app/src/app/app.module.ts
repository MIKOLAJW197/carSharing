import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatRadioModule,
  MatSelectModule,
  MatSortModule,
  MatToolbarModule
} from "@angular/material";
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserComponent} from './user/user.component';
import {UserEditComponent} from './user/user-edit/user-edit.component';
import {UserListComponent} from './user/user-list/user-list.component';
import {UserAddComponent} from './user/user-add/user-add.component';
import {CarComponent} from './car/car.component';
import {CarListComponent} from './car/car-list/car-list.component';
import {CarAddComponent} from './car/car-add/car-add.component';
import {CarEditComponent} from './car/car-edit/car-edit.component';
import {RideComponent} from './ride/ride.component';
import {RideListComponent} from './ride/ride-list/ride-list.component';
import {RideEditComponent} from './ride/ride-edit/ride-edit.component';
import {RideAddComponent} from './ride/ride-add/ride-add.component';
import {BaseComponent} from './base/base.component';
import {BaseListComponent} from './base/base-list/base-list.component';
import {BaseAddComponent} from './base/base-add/base-add.component';
import {BaseEditComponent} from './base/base-edit/base-edit.component';
import {TariffComponent} from './tariff/tariff.component';
import {TariffListComponent} from './tariff/tariff-list/tariff-list.component';
import {TariffEditComponent} from './tariff/tariff-edit/tariff-edit.component';
import {TariffAddComponent} from './tariff/tariff-add/tariff-add.component';
import {TopUpComponent} from './top-up/top-up.component';
import {TopUpListComponent} from './top-up/top-up-list/top-up-list.component';
import {TopUpAddComponent} from './top-up/top-up-add/top-up-add.component';
import {TopUpEditComponent} from './top-up/top-up-edit/top-up-edit.component';
import {CollisionComponent} from './collision/collision.component';
import {CollisionListComponent} from './collision/collision-list/collision-list.component';
import {CollisionAddComponent} from './collision/collision-add/collision-add.component';
import {CollisionEditComponent} from './collision/collision-edit/collision-edit.component';
import {ParkingComponent} from './parking/parking.component';
import {ParkingListComponent} from './parking/parking-list/parking-list.component';
import {ParkingAddComponent} from './parking/parking-add/parking-add.component';
import {ParkingEditComponent} from './parking/parking-edit/parking-edit.component';
import {WorkComponent} from './work/work.component';
import {WorkAddComponent} from './work/work-add/work-add.component';
import {WorkListComponent} from './work/work-list/work-list.component';
import {WorkEditComponent} from './work/work-edit/work-edit.component';
import {WorkerComponent} from './worker/worker.component';
import {WorkerAddComponent} from './worker/worker-add/worker-add.component';
import {WorkerEditComponent} from './worker/worker-edit/worker-edit.component';
import {WorkerListComponent} from './worker/worker-list/worker-list.component';
import {RefuelComponent} from './refuel/refuel.component';
import {RefuelAddComponent} from './refuel/refuel-add/refuel-add.component';
import {RefuelEditComponent} from './refuel/refuel-edit/refuel-edit.component';
import {RefuelListComponent} from './refuel/refuel-list/refuel-list.component';
import {CommonModule} from "@angular/common";
import {FilterPipe} from "./shared/filterPipe";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserEditComponent,
    UserListComponent,
    UserAddComponent,
    CarComponent,
    CarListComponent,
    CarAddComponent,
    CarEditComponent,
    RideComponent,
    RideListComponent,
    RideEditComponent,
    RideAddComponent,
    BaseComponent,
    BaseListComponent,
    BaseAddComponent,
    BaseEditComponent,
    TariffComponent,
    TariffListComponent,
    TariffEditComponent,
    TariffAddComponent,
    TopUpComponent,
    TopUpListComponent,
    TopUpAddComponent,
    TopUpEditComponent,
    CollisionComponent,
    CollisionListComponent,
    CollisionAddComponent,
    CollisionEditComponent,
    ParkingComponent,
    ParkingListComponent,
    ParkingAddComponent,
    ParkingEditComponent,
    WorkComponent,
    WorkAddComponent,
    WorkListComponent,
    WorkEditComponent,
    WorkerComponent,
    WorkerAddComponent,
    WorkerEditComponent,
    WorkerListComponent,
    RefuelComponent,
    RefuelAddComponent,
    RefuelEditComponent,
    RefuelListComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    MatMenuModule,
    MatIconModule,
    MatSortModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
