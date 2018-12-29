import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from "./user/user.component";
import {UserAddComponent} from "./user/user-add/user-add.component";
import {UserEditComponent} from "./user/user-edit/user-edit.component";
import {CarComponent} from "./car/car.component";
import {RideComponent} from "./ride/ride.component";
import {CarAddComponent} from "./car/car-add/car-add.component";
import {CarEditComponent} from "./car/car-edit/car-edit.component";
import {RideAddComponent} from "./ride/ride-add/ride-add.component";
import {RideEditComponent} from "./ride/ride-edit/ride-edit.component";
import {BaseComponent} from "./base/base.component";
import {BaseAddComponent} from "./base/base-add/base-add.component";
import {BaseEditComponent} from "./base/base-edit/base-edit.component";

const routes: Routes = [
  // {path: '', redirectTo: '/car-list', pathMatch: 'full'},
  {
    path: 'users',
    component: UserComponent
  },
  {
    path: 'user-add',
    component: UserAddComponent
  },
  {
    path: 'user-edit',
    component: UserEditComponent
  },
  {
    path: 'cars',
    component: CarComponent
  },
  {
    path: 'car-add',
    component: CarAddComponent
  },
  {
    path: 'car-edit',
    component: CarEditComponent
  },
  {
    path: 'ride',
    component: RideComponent
  },
  {
    path: 'ride-add',
    component: RideAddComponent
  },
  {
    path: 'ride-edit',
    component: RideEditComponent
  },
  {
    path: 'base',
    component: BaseComponent
  },
  {
    path: 'base-add',
    component: BaseAddComponent
  },
  {
    path: 'base-edit',
    component: BaseEditComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
