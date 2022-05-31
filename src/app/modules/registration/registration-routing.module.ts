import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrationComponent } from './components/registration/registration.component';
import { RegistrationGuard } from './services/guards/registrationGuard';

const routes: Routes = [
  { path: '', component: RegistrationComponent, canDeactivate: [RegistrationGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationRoutingModule { }
