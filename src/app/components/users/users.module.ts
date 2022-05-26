import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { UsersRoutingModule } from './users-routing.module';
import { UserService } from '../../services';
import { UsersComponent } from './users.component';
import { UserComponent } from '../user/user.component';
import { UserDetailsComponent } from '../user-details/user-details.component';

@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    UsersRoutingModule,
  ],
  providers: [
    UserService
  ],
})
export class UsersModule { }
