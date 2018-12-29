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
import {TariffComponent} from "./tariff/tariff.component";
import {TariffAddComponent} from "./tariff/tariff-add/tariff-add.component";
import {TariffEditComponent} from "./tariff/tariff-edit/tariff-edit.component";
import {TopUpComponent} from "./top-up/top-up.component";
import {TopUpAddComponent} from "./top-up/top-up-add/top-up-add.component";
import {TopUpEditComponent} from "./top-up/top-up-edit/top-up-edit.component";
import {CollisionComponent} from "./collision/collision.component";
import {CollisionAddComponent} from "./collision/collision-add/collision-add.component";
import {CollisionEditComponent} from "./collision/collision-edit/collision-edit.component";
import {ParkingComponent} from "./parking/parking.component";
import {ParkingAddComponent} from "./parking/parking-add/parking-add.component";
import {ParkingEditComponent} from "./parking/parking-edit/parking-edit.component";
import {WorkComponent} from "./work/work.component";
import {WorkAddComponent} from "./work/work-add/work-add.component";
import {WorkEditComponent} from "./work/work-edit/work-edit.component";
import {WorkerComponent} from "./worker/worker.component";
import {WorkerAddComponent} from "./worker/worker-add/worker-add.component";
import {WorkerEditComponent} from "./worker/worker-edit/worker-edit.component";

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
  {
    path: 'tariff',
    component: TariffComponent
  },
  {
    path: 'tariff-add',
    component: TariffAddComponent
  },
  {
    path: 'tariff-edit',
    component: TariffEditComponent
  },
  {
    path: 'top-up',
    component: TopUpComponent
  },
  {
    path: 'top-up-add',
    component: TopUpAddComponent
  },
  {
    path: 'top-up-edit',
    component: TopUpEditComponent
  },
  {
    path: 'collision',
    component: CollisionComponent
  },
  {
    path: 'collision-add',
    component: CollisionAddComponent
  },
  {
    path: 'collision-edit',
    component: CollisionEditComponent
  },
  {
    path: 'parking',
    component: ParkingComponent
  },
  {
    path: 'parking-add',
    component: ParkingAddComponent
  },
  {
    path: 'parking-edit',
    component: ParkingEditComponent
  },
  {
    path: 'tech',
    component: WorkComponent
  },
  {
    path: 'tech-add',
    component: WorkAddComponent
  },
  {
    path: 'tech-edit',
    component: WorkEditComponent
  },{
    path: 'workers',
    component: WorkerComponent
  },
  {
    path: 'workers-add',
    component: WorkerAddComponent
  },
  {
    path: 'workers-edit',
    component: WorkerEditComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
