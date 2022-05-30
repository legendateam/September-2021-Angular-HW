import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ErrorPageComponent} from "./components";
import {MainLayoutsComponent} from "./main-layouts";

const routes: Routes = [
  { path: '', component: MainLayoutsComponent, children: [
      { path: 'login', loadChildren: () => import('./modules/login/login.module').then(mod => mod.LoginModule) },
      { path: 'registration', loadChildren: () => import('./modules/registration/registration.module').then(mod => mod.RegistrationModule) },
      { path: 'cars', loadChildren: () => import('./modules/car/car.module').then(mod => mod.CarModule) }
    ]
  },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})

export class AppRoutingModule {
}
