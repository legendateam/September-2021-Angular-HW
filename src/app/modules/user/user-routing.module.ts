import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {UsersComponent} from "./components/users/users.component";
import {UserDetailsComponent} from "./components/user-details/user-details.component";
import {UsersResolver} from "./services/resolvers/usersresolver";
import {UserGuard} from "./services/guards/user.guard";
import {UserResolver} from "./services/resolvers/user.resolver";

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    resolve: { usersData: UsersResolver },
    children: [
      {
        path: ':id',
        component: UserDetailsComponent,
        resolve: { userData: UserResolver },
        canActivate: [UserGuard],
        canDeactivate: [UserGuard],
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
