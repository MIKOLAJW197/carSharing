import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSortModule,
  MatToolbarModule
} from "@angular/material";
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import {UserComponent} from './user/user.component';
import {UserEditComponent} from './user/user-edit/user-edit.component';
import {UserListComponent} from './user/user-list/user-list.component';
import {UserAddComponent} from './user/user-add/user-add.component';
import {CarComponent} from './car/car.component';
import {CarListComponent} from './car/car-list/car-list.component';
import {CarAddComponent} from './car/car-add/car-add.component';
import {CarEditComponent} from './car/car-edit/car-edit.component';
import {RideComponent} from './ride/ride.component';

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
    RideComponent
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
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
