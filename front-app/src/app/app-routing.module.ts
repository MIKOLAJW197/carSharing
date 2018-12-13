import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from "@angular/common";
import {UserComponent} from "./user/user.component";
import {UserAddComponent} from "./user/user-add/user-add.component";

const routes: Routes = [
  // {path: '', redirectTo: '/car-list', pathMatch: 'full'},
  {
    path: 'users',
    component: UserComponent
  },
  {
    path: 'user-add',
    component: UserAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
