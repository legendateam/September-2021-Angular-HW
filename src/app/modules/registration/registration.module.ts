import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './components/registration/registration.component';
import {RegistrationGuard} from "./services/guards/registrationGuard";
import {AuthRegisterService} from "./services/auth/auth.service";

@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RegistrationRoutingModule
  ],
  providers: [RegistrationGuard, AuthRegisterService]
})
export class RegistrationModule { }
