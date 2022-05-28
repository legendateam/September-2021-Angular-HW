import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import {UserRoutingModule} from "./user-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {UserService} from "./services/user.service";
import {UserResolver} from "./services/resolvers/user.resolver";
import {UsersResolver} from "./services/resolvers/usersresolver";
import {UserGuard} from "./services/guards/user.guard";

@NgModule({
  declarations: [
    UserComponent,
    UsersComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    UserRoutingModule
  ],
  providers: [
    UserService,
    UserResolver,
    UsersResolver,
    UserGuard
  ]
})
export class UserModule { }
